import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/useToast";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetServiceDetailsTypeQuery,
  useGetServiceImageQuery,
  useCreateServiceImageMutation,
  useUpdateServiceImageMutation,
} from "@/api/serviceDetailsApi";

const ServiceImagesForm = () => {
  const { id } = useParams(); // If id exists, it's an update operation
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();

  const { data: serviceTypes } = useGetServiceDetailsTypeQuery();
  const { data: existingServiceImage, refetch } = useGetServiceImageQuery(id, {
    skip: !id, // Skip fetching if no id (create mode)
  });

  

  const [createServiceImage] = useCreateServiceImageMutation();
  const [updateServiceImage] = useUpdateServiceImageMutation();

  const form = useForm({
    defaultValues: {
      serviceImageTitle: "",
      serviceImageDescription: "",
      serviceTypeId: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  // Populate form fields when updating
  useEffect(() => {
    if (existingServiceImage) {
      setValue("serviceImageTitle", existingServiceImage.serviceImageTitle);
      setValue("serviceImageDescription", existingServiceImage.serviceImageDescription);
      setValue("serviceTypeId", existingServiceImage.serviceTypeId);
    }
  }, [existingServiceImage, setValue]);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("serviceImageTitle", data.serviceImageTitle);
    formData.append("serviceImageDescription", data.serviceImageDescription);
    formData.append("serviceTypeId", data.serviceTypeId);
    
    if (data.serviceImage[0]) {
      formData.append("serviceImage", data.serviceImage[0]); // Append file
    }

    

    try {
      if (id) {
        await updateServiceImage({ id, formData }).unwrap();
        showSuccess("Service image updated successfully");
        refetch()
        navigate("/admin/service-details-images");
      } else {
        await createServiceImage(formData).unwrap();
        showSuccess("Service image created successfully");
        navigate("/admin/service-details-images");
       
      }
      
    } catch (error) {
        showError("Failed to create service image");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="serviceImageTitle">Service Image Title</Label>
          <Input id="serviceImageTitle" {...register("serviceImageTitle", { required: true })} />
          {errors.serviceImageTitle && <FormMessage>This field is required.</FormMessage>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="serviceImage">Service Image</Label>
          <Input type="file" id="serviceImage" {...register("serviceImage")} />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="serviceImageDescription">Service Image Description</Label>
          <Textarea id="serviceImageDescription" {...register("serviceImageDescription", { required: true })} />
          {errors.serviceImageDescription && <FormMessage>This field is required.</FormMessage>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="serviceTypeId">Service Type</Label>
          <select className="bg-secondary border rounded-sm text-white" id="serviceTypeId" {...register("serviceTypeId", { required: true })}>
            <option value="">Select a Service Type</option>
            {serviceTypes?.map((type: any) => (
              <option key={type.id} value={type.id}>
                {type.serviceType}
              </option>
            ))}
          </select>
          {errors.serviceTypeId && <FormMessage>This field is required.</FormMessage>}
        </div>

        <Button className="w-fit text-secondary bg-primary" type="submit">{id ? "Update Service Image" : "Create Service Image"}</Button>
      </form>
    </Form>
  );
};

export default ServiceImagesForm;
