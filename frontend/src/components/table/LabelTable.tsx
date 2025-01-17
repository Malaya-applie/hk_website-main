import { useEffect, useState } from "react";
import {
  useGetLabelsQuery,
  useCreateLabelMutation,
  useUpdateLabelMutation,
  useDeleteLabelMutation,
} from "@/api/labelApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { DialogForm } from "@/components/forms/DialogForm";
import { LabelForm } from "@/components/forms/LabelForm";
import { useToast } from "@/hooks/useToast";
import { CreateLabel, UpdateLabel } from "@/interface";

const LabelComponent = ({ title }: { title: string }) => {
  const { data: labels, refetch } = useGetLabelsQuery(undefined);

  const [createLabel] = useCreateLabelMutation();
  const [updateLabel] = useUpdateLabelMutation();
  const [deleteLabel] = useDeleteLabelMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<UpdateLabel | null>(null);
  const { showSuccess, showError } = useToast();

  const handleCreate = async (newLabel: CreateLabel) => {
    try {
      await createLabel(newLabel).unwrap();
      refetch();
      setIsDialogOpen(false);
      showSuccess("Label created successfully");
    } catch (error) {
      showError("Failed to create label");
      console.error("Failed to create label", error);
    }
  };

  const handleUpdate = async (id: number, updatedLabel: CreateLabel) => {
    try {
      await updateLabel({ id, ...updatedLabel }).unwrap();
      refetch();
      setIsDialogOpen(false);
      showSuccess("Label updated successfully");
    } catch (error) {
      showError("Failed to update label");
      console.error("Failed to update label", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteLabel(id).unwrap();
      refetch();
      showSuccess("Label deleted successfully");
    } catch (error) {
      showError("Failed to delete label");
      console.error("Failed to delete label", error);
    }
  };

  const handleMultipleDelete = async (ids: string[]) => {
    try {
      await Promise.all(ids.map((id) => deleteLabel(id).unwrap()));
      refetch(); // Refetch the Label data after successful delete
      showSuccess("Labels deleted successfully"); // Show success toast
    } catch (error) {
      showError("Failed to delete Label items"); // Show error toast
      console.error("Failed to delete Label items", error);
    }
  };

  useEffect(() => {
    if (!isDialogOpen) {
      setTimeout(() => {
        document.body.style.pointerEvents = "auto";
      }, 300);
    }
  }, [isDialogOpen]);

  const labelsWithHandlers: DataItem[] =
    labels?.map((label: UpdateLabel) => ({
      ...label,
      handleUpdate: () => {
        setSelectedLabel({
          id: label.id,
          label: label.label,
          description: label.description,
        });
        setIsDialogOpen(true);
      },
      handleDelete: () => handleDelete(label.id),
    })) || [];

  const columns = generateColumns(
    labelsWithHandlers,
    [],
    ["id", "handleUpdate", "handleDelete"],
    true
  );

  return (
    <>
      <div>
        <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
        <DataTable
          columns={columns}
          data={labelsWithHandlers}
          onMultipleDelete={handleMultipleDelete}
          setIsDialogOpen={() => {
            setSelectedLabel(null);
            setIsDialogOpen(true);
          }}
          searchableFields={["label", "description"]}
        />
        <DialogForm
          isOpen={isDialogOpen}
          onClose={() => {
            setIsDialogOpen(false);
          }}
          title="Create Label"
          description="Create a new label with the following details."
          formComponent={
            <LabelForm
              onSubmit={
                selectedLabel
                  ? (data) => handleUpdate(selectedLabel.id, data)
                  : handleCreate
              }
              defaultValues={selectedLabel || undefined}
            />
          }
        />
      </div>
    </>
  );
};

export default LabelComponent;
