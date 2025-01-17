import { useEffect, useState } from "react";
import {
  useGetBrandLogosQuery,
  useCreateBrandLogoMutation,
  useUpdateBrandLogoMutation,
  useDeleteBrandLogoMutation,
} from "@/api/brandLogoApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { DialogForm } from "@/components/forms/DialogForm";
import { BrandLogoForm } from "@/components/forms/BrandLogoForm";
import { useToast } from "@/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import {
  setBrandLogos,
  addBrandLogo,
  updateBrandLogo,
  deleteBrandLogo,
} from "@/store/slices/brandLogoSlice";
import { RootState } from "@/store";
import { CreateBrandLogo, UpdateBrandLogo } from "@/interface";

const BrandLogoTable = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const { brandLogos } = useSelector((state: RootState) => state.brandLogo);
  const { data: fetchedBrandLogos } = useGetBrandLogosQuery(undefined, {
    skip: brandLogos.length > 0,
  });
  const [createBrandLogo] = useCreateBrandLogoMutation();
  const [updateBrandLogoMutation] = useUpdateBrandLogoMutation();
  const [deleteBrandLogoMutation] = useDeleteBrandLogoMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedBrandLogo, setSelectedBrandLogo] =
    useState<UpdateBrandLogo | null>(null);
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    if (fetchedBrandLogos) {
      dispatch(setBrandLogos(fetchedBrandLogos));
    }
  }, [fetchedBrandLogos, dispatch]);

  const handleCreate = async (newBrandLogo: CreateBrandLogo) => {
    try {
      const result = await createBrandLogo(newBrandLogo).unwrap();
      dispatch(addBrandLogo(result));
      setIsDialogOpen(false);
      showSuccess("Brand logo created successfully");
    } catch (error) {
      showError("Failed to create brand logo");
    }
  };

  const handleUpdate = async (
    id: number,
    updatedBrandLogo: CreateBrandLogo
  ) => {
    try {
      const result = await updateBrandLogoMutation({
        id,
        ...updatedBrandLogo,
      }).unwrap();
      dispatch(updateBrandLogo(result));
      setIsDialogOpen(false);
      showSuccess("Brand logo updated successfully");
    } catch (error) {
      showError("Failed to update brand logo");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteBrandLogoMutation(id).unwrap();
      dispatch(deleteBrandLogo(id));
      showSuccess("Brand logo deleted successfully");
    } catch (error) {
      showError("Failed to delete brand logo");
    }
  };

  const handleMultipleDelete = async (ids: string[]) => {
    try {
      await Promise.all(
        ids.map((id) => {
          deleteBrandLogoMutation(id).unwrap();
          dispatch(deleteBrandLogo(Number(id)));
        })
      );
      showSuccess("Brand logo deleted successfully");
    } catch (error) {
      showError("Failed to delete Label items");
      console.error("Failed to delete Label items", error);
    }
  };

  const brandLogosWithHandlers: DataItem[] =
    brandLogos.map((logo: UpdateBrandLogo) => ({
      ...logo,
      handleUpdate: () => {
        setSelectedBrandLogo({
          id: logo.id,
          name: logo.name,
          logo: logo.logo,
        });
        setIsDialogOpen(true);
      },
      handleDelete: () => handleDelete(logo.id),
    })) || [];

  const columns = generateColumns(
    brandLogosWithHandlers,
    ["logo"],
    ["id", "handleUpdate", "handleDelete"],
    true
  );

  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
      <DataTable
        columns={columns}
        data={brandLogosWithHandlers}
        onMultipleDelete={handleMultipleDelete}
        searchableFields={["name"]}
        setIsDialogOpen={() => {
          setSelectedBrandLogo(null);
          setIsDialogOpen(true);
        }}
      />
      <DialogForm
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Create Brand Logo"
        description="Create a new Brand Logo with the following details."
        formComponent={
          <BrandLogoForm
            onSubmit={
              selectedBrandLogo
                ? (data) => handleUpdate(selectedBrandLogo.id, data)
                : handleCreate
            }
            defaultValues={selectedBrandLogo || undefined}
          />
        }
      />
    </div>
  );
};

export default BrandLogoTable;
