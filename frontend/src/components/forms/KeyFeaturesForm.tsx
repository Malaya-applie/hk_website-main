import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Textarea } from "@/components/ui/textarea";
  import { useToast } from "@/hooks/useToast";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "@/components/editor/editor";

import { useGetPortfolioDetailsQuery } from '@/api/portfolioDetailsApi';
import { useCreateKeyFeatureMutation, useGetKeyFeatureByIdQuery, useUpdateKeyFeatureMutation } from '@/api/keyFeaturesApi';

const KeyFeaturesForm = () => {
    const {id} = useParams();
     const { data } = useGetPortfolioDetailsQuery();
     const { data: keyFeature, refetch } = useGetKeyFeatureByIdQuery(id, { skip: !id });
     const [createKeyFeature] = useCreateKeyFeatureMutation();
     const [updateKeyFeature] = useUpdateKeyFeatureMutation()
     const {showSuccess, showError} = useToast();
     const navigate = useNavigate();
      //console.log(data?.portfolio);   // array
    const form = useForm()
   
     const {
       control,
       register,
       handleSubmit,
       formState: { errors },
       reset,
       setValue,
       watch,
     } = form;

     // Load form data if updating
  useEffect(() => {
    if (id && keyFeature) {
      reset({
        title: keyFeature?.title || "",
        description: keyFeature?.description || "",
        portfolioId: keyFeature?.portfolioId || "",
      });
    }
  }, [id, keyFeature, reset]);

     
     const onSubmit: SubmitHandler<any> = async (data) => {
            try {
                if (id) {
                    // Update if `id` exists
                    await updateKeyFeature({ id, updatedKeyFeature: data });
                    showSuccess("Key feature updated successfully");
                    refetch();
                    navigate("/admin/portfolio-details-key-features")
                  } else {
                    // Create if no `id`
                    await createKeyFeature(data);
                    showSuccess("Key feature created successfully");
                    navigate("/admin/portfolio-details-key-features")
                  }
                  // Navigate back to the key features list
            } catch (error) {
                console.error("Failed to create key feature", error);
            }
      };
    
   
  return (
    <Form {...form}>
       <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
             <Label htmlFor="title">Title</Label>
             <Input id="title"  {...register("title", { required: "Title is required" })} />
             {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div className="grid gap-2 sm:col-span-2">
             <Label htmlFor="description">Description</Label>
             <Textarea id="description"  {...register("description", { required: "Description is required" })} />
             {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
          </div>

          <div>
          <select
         {...register("portfolioId", { required: "Please select a portfolio" })}
        className="bg-secondary border rounded-sm"
        id="portfolioFeature"
      >
        <option value="">Select a portfolio</option> {/* Default Option */}
        {data?.portfolio?.map((portfolio) => (
          <option key={portfolio?.id} value={portfolio?.id}>
            {portfolio?.clientName}
          </option>
        ))}
      </select>
          </div>

          <div className="flex justify-center sm:col-span-2">
          <Button type="submit" className="w-fit text-secondary bg-primary">
          {id ? "Update Feature" : "Add Feature"}
          </Button>
        </div>
       </form>
    </Form>
  )
}

export default KeyFeaturesForm