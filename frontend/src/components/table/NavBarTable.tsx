import { useState } from "react";
import {
  useGetNavbarsQuery,
  useCreateNavbarMutation,
  useUpdateNavbarMutation,
  useDeleteNavbarMutation,
} from "@/api/navbarApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { DialogForm } from "@/components/forms/DialogForm";
import { NavBarForm } from "@/components/forms/NavBarForm";
import { useToast } from "@/hooks/useToast"; // Import the toast hook
import { CreateNavBar, UpdateNavBar } from "@/interface";

const NavbarComponent = ({ title }: { title: string }) => {
  const { data: navbars, refetch } = useGetNavbarsQuery(undefined);

  const [createNavbar] = useCreateNavbarMutation();
  const [updateNavbar] = useUpdateNavbarMutation();
  const [deleteNavbar] = useDeleteNavbarMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedNavbar, setSelectedNavbar] = useState<UpdateNavBar | null>(
    null
  );
  const { showSuccess, showError } = useToast(); // Use the toast hook

  const handleCreate = async (newNavbar: CreateNavBar) => {
    try {
      await createNavbar(newNavbar).unwrap();
      refetch(); // Refetch the navbar data after successful create
      setIsDialogOpen(false);
      showSuccess("Navbar created successfully"); // Show success toast
    } catch (error) {
      showError("Failed to create navbar item"); // Show error toast
      console.error("Failed to create navbar item", error);
    }
  };

  const handleUpdate = async (id: number, updatedNavbar: CreateNavBar) => {
    try {
      await updateNavbar({ id, ...updatedNavbar }).unwrap();
      refetch(); // Refetch the navbar data after successful update
      setIsDialogOpen(false);
      showSuccess("Navbar updated successfully"); // Show success toast
    } catch (error) {
      showError("Failed to update navbar item"); // Show error toast
      console.error("Failed to update navbar item", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteNavbar(id).unwrap();
      refetch(); // Refetch the navbar data after successful delete
      showSuccess("Navbar deleted successfully"); // Show success toast
    } catch (error) {
      showError("Failed to delete navbar item"); // Show error toast
      console.error("Failed to delete navbar item", error);
    }
  };

  const handleMultipleDelete = async (ids: string[]) => {
    try {
      await Promise.all(ids.map((id) => deleteNavbar(id).unwrap()));
      refetch(); // Refetch the navbar data after successful delete
      showSuccess("Navbars deleted successfully"); // Show success toast
    } catch (error) {
      showError("Failed to delete navbar items"); // Show error toast
      console.error("Failed to delete navbar items", error);
    }
  };

  // Add handleUpdate and handleDelete to each navbar item
  const navbarsWithHandlers: DataItem[] =
    navbars?.map((navbar: UpdateNavBar) => ({
      ...navbar,
      handleUpdate: () => {
        setSelectedNavbar({
          id: navbar.id,
          name: navbar.name,
          link: navbar.link,
        });
        setIsDialogOpen(true);
      },
      handleDelete: () => handleDelete(navbar.id),
    })) || [];

  const columns = generateColumns(
    navbarsWithHandlers,
    [],
    ["id", "handleUpdate", "handleDelete"],
    true
  );

  return (
    <>
      <div>
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
        </div>
        <DataTable
          columns={columns}
          data={navbarsWithHandlers}
          onMultipleDelete={handleMultipleDelete}
          setIsDialogOpen={() => {
            setSelectedNavbar(null);
            setIsDialogOpen(true);
          }}
          searchableFields={["name", "link"]}
        />
        <DialogForm
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          title="Create Navbar"
          description="Create a new navbar with the following details."
          formComponent={
            <NavBarForm
              onSubmit={
                selectedNavbar
                  ? (data) => handleUpdate(selectedNavbar.id!, data)
                  : handleCreate
              }
              defaultValues={selectedNavbar || undefined}
            />
          }
        />
      </div>
    </>
  );
};

export default NavbarComponent;
