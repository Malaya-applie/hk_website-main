import React, {useEffect, useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  import { useToast } from "@/hooks/useToast";
  import { useNavigate, useParams } from "react-router-dom";
import {useGetTechnologyStackByIdQuery, useCreateTechnologyStackMutation, useUpdateTechnologyStackMutation} from '@/api/technologyStackApi'
import { useGetPortfolioDetailsQuery } from '@/api/portfolioDetailsApi';



const TechnologyStackForm = () => {
    const {id} = useParams();
     const { showSuccess, showError } = useToast();
       const navigate = useNavigate();

    // API hooks
    const {data: technologyStack, refetch} = useGetTechnologyStackByIdQuery(id, {skip: !id});
    const [createTechnologyStack] = useCreateTechnologyStackMutation();
    const [updateTechnologyStack] = useUpdateTechnologyStackMutation();

    const {data: portfolioDetails} = useGetPortfolioDetailsQuery();
   
     const form = useForm();

     const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch,
      } = form;

     // Prefill the form when portfolioDetails is available
       useEffect(() => {
           if(technologyStack) {
            reset({
              type: technologyStack.type,
              portfolioDetailId: technologyStack.portfolioDetailId,
              technologyImage: technologyStack.technologyImage[0], // Reset file input (cannot set file input value)
          });
           }
       }, [technologyStack, reset]);

     

     const onSubmit: SubmitHandler<any> = async (data) => {
  
      try {
        const formData = new FormData();
        formData.append("type", data.type);
        formData.append("portfolioDetailId", data.portfolioDetailId);

        // Only append image if a new file is selected
        if (data.technologyImage && data.technologyImage.length > 0) {
            formData.append("technologyImage", data.technologyImage[0]);
        }

        if (id) {
            await updateTechnologyStack({ id, formData }).unwrap();
            showSuccess("Technology stack updated successfully");
            refetch();
            navigate("/admin/portfolio-technology-stack")
        } else {
            await createTechnologyStack(formData).unwrap();
            showSuccess("Technology stack created successfully");
            navigate("/admin/portfolio-technology-stack")
        }

        //navigate("/technology-stacks"); // Redirect after update
    } catch (error) {
        console.error("Error updating technology stack:", error);
        showError("Failed to save technology stack");
    }
     }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
           <Label htmlFor="technologyImage">Technology Image</Label>
           <Input id='technologyImage' type='file' accept='image/*' {...register("technologyImage", {required: "Please upload a technology image"})} />
          </div>

          <div className="grid gap-2">
           <Label htmlFor="type">Technology type</Label>
           <select className="bg-secondary border rounded-sm" id="type" {...register("type", { required: "Please select a technology type" })}>
             <option value="frontend technologies">Frontend Technologies</option>
             <option value="server architecture">Server Architecture</option>
             <option value="backend">Backend</option>
              <option value="mobile development">Mobile Development</option>
              <option value="database">Database</option>
              <option value="optional stack components">Optional Stack Components</option>
              <option value="cache memory">Cache Memory</option>
           </select>
             </div>

            <div className="grid gap-2">
             <Label htmlFor='PortfolioDetailId'>Select the portfolio</Label>
            <select
            className="bg-secondary border rounded-sm"
            id="portfolioDetailId"
            {...register("portfolioDetailId", { required: "Please select a portfolio" })}
          >
            {portfolioDetails?.portfolio?.map((portfolio: any) => (
              <option key={portfolio.id} value={portfolio.id}>
                {portfolio.clientName}
              </option>
            ))}
          </select>
            </div>
           

          <div className="sm:col-span-2">
          <Button className="w-fit text-secondary bg-primary" type="submit">{id ? "Update" : "Create"} Technology Stack</Button>
        </div>
      </form>
    </Form>
  )
}

export default TechnologyStackForm