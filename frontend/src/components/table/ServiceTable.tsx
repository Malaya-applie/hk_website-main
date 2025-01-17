import { useEffect, useState } from "react";
import {
  useGetServicesQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} from "@/api/serviceApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { DialogForm } from "@/components/forms/DialogForm";
import { ServiceForm } from "@/components/forms/ServiceForm";
import { useToast } from "@/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import {
  setServices,
  addService,
  updateService,
  deleteService,
} from "@/store/slices/serviceSlice";
import { RootState } from "@/store";
import { CreateService, UpdateService } from "@/interface";

const ServiceTable = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const { services } = useSelector((state: RootState) => state.service);
  const { data: fetchedServices } = useGetServicesQuery(undefined, {
    skip: services.length > 0,
  });
  const [createService] = useCreateServiceMutation();
  const [updateServiceMutation] = useUpdateServiceMutation();
  const [deleteServiceMutation] = useDeleteServiceMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<UpdateService | null>(
    null
  );
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    if (fetchedServices) {
      dispatch(setServices(fetchedServices));
    }
  }, [fetchedServices, dispatch]);

  const handleCreate = async (newService: CreateService) => {
    try {
      const result = await createService(newService).unwrap();
      dispatch(addService(result));
      setIsDialogOpen(false);
      showSuccess("Service created successfully");
    } catch (error) {
      showError("Failed to create service");
    }
  };

  const handleUpdate = async (id: number, updatedService: CreateService) => {
    try {
      const result = await updateServiceMutation({
        id,
        ...updatedService,
      }).unwrap();
      dispatch(updateService(result));
      setIsDialogOpen(false);
      showSuccess("Service updated successfully");
    } catch (error) {
      showError("Failed to update service");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteServiceMutation(id).unwrap();
      dispatch(deleteService(id));
      showSuccess("Service deleted successfully");
    } catch (error) {
      showError("Failed to delete service");
    }
  };

  const handleMultipleDelete = async (ids: string[]) => {
    try {
      await Promise.all(ids.map((id) => deleteServiceMutation(id).unwrap()));
      showSuccess("Service deleted successfully");
    } catch (error) {
      showError("Failed to delete Service items");
      console.error("Failed to delete Service items", error);
    }
  };

  const servicesWithHandlers: DataItem[] =
    services.map((service: UpdateService) => ({
      ...service,
      handleUpdate: () => {
        setSelectedService({
          id: service.id,
          name: service.name,
          description: service.description,
          icon: service.icon,
        });
        setIsDialogOpen(true);
      },
      handleDelete: () => handleDelete(service.id),
    })) || [];

  const columns = generateColumns(
    servicesWithHandlers,
    ["icon"],
    ["id", "description", "handleUpdate", "handleDelete"],
    true
  );

  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
      <DataTable
        columns={columns}
        data={servicesWithHandlers}
        onMultipleDelete={handleMultipleDelete}
        searchableFields={["name"]}
        setIsDialogOpen={() => {
          setSelectedService(null);
          setIsDialogOpen(true);
        }}
      />
      <DialogForm
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Create Service"
        description="Create a new Service with the following details."
        formComponent={
          <ServiceForm
            onSubmit={
              selectedService
                ? (data) => handleUpdate(selectedService.id, data)
                : handleCreate
            }
            defaultValues={selectedService || undefined}
          />
        }
      />
    </div>
  );
};

export default ServiceTable;
