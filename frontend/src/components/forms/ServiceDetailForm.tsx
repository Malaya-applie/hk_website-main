import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/useToast";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "@/components/editor/editor";
import {
  useCreateServiceDetailMutation,
  useUpdateServiceDetailMutation,
  useGetServiceDetailQuery,
} from "@/api/serviceDetailsApi"; 

const ServiceDetailForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();

  const [createServiceDetail, { isLoading: isCreating }] =
    useCreateServiceDetailMutation();
  const [updateServiceDetail, { isLoading: isUpdating }] =
    useUpdateServiceDetailMutation();
  const { data: existingData, refetch } = useGetServiceDetailQuery(id, {
    skip: !id, // Skip fetching if no ID is provided (creation mode)
  });

  const form = useForm({
    defaultValues: {
      serviceType: "",
      serviceDescription: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  // Watch for editor content
  const serviceDescription = watch("serviceDescription");

  // Populate form when editing
  useEffect(() => {
    if (existingData) {
      setValue("serviceType", existingData.serviceType);
      setValue("serviceDescription", existingData.serviceDescription);
    }
  }, [existingData, setValue]);

  const onSubmit = async (data: any) => {
    try {
      if (id) {
        await updateServiceDetail({ id, ...data }).unwrap();
        showSuccess("Service updated successfully");
        refetch();
        navigate("/admin/service-details")
      } else {
        await createServiceDetail(data).unwrap();
        showSuccess("Service created successfully");
        navigate("/admin/service-details")
      }
    
    } catch (error) {
       showError("Failed to create service");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="serviceType">Service Type</Label>
          <Input id="serviceType" {...register("serviceType", { required: true })} />
          {errors.serviceType && <FormMessage>This field is required.</FormMessage>}
        </div>

        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="serviceDescription">Service Description</Label>
          <Editor
            onChange={(_event, editor) => {
              const data = editor.getData();
              setValue("serviceDescription", data, { shouldValidate: true });
            }}
            data={serviceDescription} // Ensure initial data is passed
            id="serviceDescription"
          />
          {errors.serviceDescription && <FormMessage>This field is required.</FormMessage>}
        </div>

         <div className="flex justify-center sm:col-span-2">
                  <Button type="submit" className="w-fit text-secondary bg-primary">
                  {id ? "Update" : "Create"}
                  </Button>
                </div>
      </form>
    </Form>
  );
};

export default ServiceDetailForm;
