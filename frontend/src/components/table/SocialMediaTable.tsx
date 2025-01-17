import { useEffect, useState } from "react";
import {
  useGetSocialMediasQuery,
  useCreateSocialMediaMutation,
  useUpdateSocialMediaMutation,
  useDeleteSocialMediaMutation,
} from "@/api/socialMediaApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { DialogForm } from "@/components/forms/DialogForm";
import { SocialMediaForm } from "@/components/forms/SocialMediaForm";
import { useToast } from "@/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import {
  setSocialMedias,
  addSocialMedia,
  updateSocialMedia,
  deleteSocialMedia,
} from "@/store/slices/socialMediaSlice";
import { RootState } from "@/store";
import { CreateSocialMedia, UpdateSocialMedia } from "@/interface";

const SocialMediaTable = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const { socialMedias } = useSelector((state: RootState) => state.socialMedia);
  const { data: fetchedSocialMedias } = useGetSocialMediasQuery(undefined, {
    skip: socialMedias.length > 0,
  });
  const [createSocialMedia] = useCreateSocialMediaMutation();
  const [updateSocialMediaMutation] = useUpdateSocialMediaMutation();
  const [deleteSocialMediaMutation] = useDeleteSocialMediaMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] =
    useState<UpdateSocialMedia | null>(null);
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    if (fetchedSocialMedias) {
      dispatch(setSocialMedias(fetchedSocialMedias));
    }
  }, [fetchedSocialMedias, dispatch]);

  const handleCreate = async (newSocialMedia: CreateSocialMedia) => {
    try {
      const result = await createSocialMedia(newSocialMedia).unwrap();
      dispatch(addSocialMedia(result));
      setIsDialogOpen(false);
      showSuccess("Social media created successfully");
    } catch (error) {
      showError("Failed to create social media");
    }
  };

  const handleUpdate = async (
    id: number,
    updatedSocialMedia: CreateSocialMedia
  ) => {
    try {
      const result = await updateSocialMediaMutation({
        id,
        ...updatedSocialMedia,
      }).unwrap();
      dispatch(updateSocialMedia(result));
      setIsDialogOpen(false);
      showSuccess("Social media updated successfully");
    } catch (error) {
      showError("Failed to update social media");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteSocialMediaMutation(id).unwrap();
      dispatch(deleteSocialMedia(id));
      showSuccess("Social media deleted successfully");
    } catch (error) {
      showError("Failed to delete social media");
    }
  };

  const handleMultipleDelete = async (ids: string[]) => {
    try {
      await Promise.all(
        ids.map((id) => {
          deleteSocialMediaMutation(id).unwrap();
          dispatch(deleteSocialMedia(Number(id)));
        })
      );
      showSuccess("Social media deleted successfully");
    } catch (error) {
      showError("Failed to delete social media");
    }
  };

  const socialMediasWithHandlers: DataItem[] =
    socialMedias.map((logo: UpdateSocialMedia) => ({
      ...logo,
      handleUpdate: () => {
        setSelectedSocialMedia({
          id: logo.id,
          name: logo.name,
          link: logo.link,
          logo: logo.logo,
        });
        setIsDialogOpen(true);
      },
      handleDelete: () => handleDelete(logo.id),
    })) || [];

  const columns = generateColumns(
    socialMediasWithHandlers,
    ["logo"],
    ["id", "handleUpdate", "handleDelete"],
    true
  );

  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
      <DataTable
        columns={columns}
        data={socialMediasWithHandlers}
        onMultipleDelete={handleMultipleDelete}
        searchableFields={["name", "link"]}
        setIsDialogOpen={() => {
          setSelectedSocialMedia(null);
          setIsDialogOpen(true);
        }}
      />
      <DialogForm
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Create Social Media"
        description="Create a new Social Media with the following details."
        formComponent={
          <SocialMediaForm
            onSubmit={
              selectedSocialMedia
                ? (data) => handleUpdate(selectedSocialMedia.id, data)
                : handleCreate
            }
            defaultValues={selectedSocialMedia || undefined}
          />
        }
      />
    </div>
  );
};

export default SocialMediaTable;
