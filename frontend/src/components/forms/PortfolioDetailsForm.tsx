import React, {useEffect, useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import the blogDetails from the api and use it to populate the form
import { useGetPortfolioDetailQuery, useCreatePortfolioMutation, useUpdatePortfolioMutation } from '@/api/portfolioDetailsApi';
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
  // import the create portfolioDetails and update portfolioDetails api
  import { useToast } from "@/hooks/useToast";
  import { useNavigate, useParams } from "react-router-dom";
  import Editor from "@/components/editor/editor";
  

  

const PortfolioDetailsForm = () => {
   const [editorData, setEditorData] = useState({
     introduction: ""
   });
   const { id } = useParams();
   const { showSuccess, showError } = useToast();
   const navigate = useNavigate();

  //  API hooks
  const { data: portfolioDetails, refetch } = useGetPortfolioDetailQuery(id, { skip: !id }); // Skip fetching if no ID
  const [createPortfolio, { isLoading: isCreating }] = useCreatePortfolioMutation();
  const [updatePortfolio, { isLoading: isUpdating }] = useUpdatePortfolioMutation();
   
  

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

  



  // Prefill the form when portfolioDetails is available
  useEffect(() => {
    if (portfolioDetails) {
      reset(portfolioDetails); // Reset the form with fetched data
      setEditorData((prevState) => ({
        ...prevState,
        introduction: portfolioDetails.introduction, projectOverviewDescription: portfolioDetails.projectOverviewDescription,
        challengeDescription: portfolioDetails.challengeDescription, solutionDescription: portfolioDetails.solutionDescription, solutionDevelopmentDescription: portfolioDetails.solutionDevelopmentDescription,
        conclusionDescription: portfolioDetails.conclusionDescription, securityDescription: portfolioDetails.securityDescription}));
    }
  }, [portfolioDetails, reset]);


  
 

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append all the other fields from the form
    Object.keys(data).forEach((key) => {
      if (key === "logo" || key === "heroImage" || key === "projectOverviewImage" || key === "challengeIconImage" || key === "solutionIconImage" || key === "solutionImage") {
        // If it's a file input, get the file from watch
        const file = watch(key)[0]; // watch returns an array for file inputs
        if (file) {
          formData.append(key, file);
        }
      } else {
        formData.append(key, data[key]);
      }

    });
  
  // send the form data to the api
   if(id){
    await updatePortfolio({id, formData})
    showSuccess("Portfolio Details updated successfully");
    refetch();
    navigate("/admin/portfolio-details");
   } else {
    await createPortfolio(formData);
    showSuccess("Portfolio Details created successfully");
    navigate("/admin/portfolio-details");
   }
        
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
      <div className="grid gap-2">
          <Label htmlFor="clientName">Client Name</Label>
          <Input id="clientName" {...register("clientName")} />
        </div>

        <div className='grid gap-2'>
          <Label htmlFor="tagline">Tag line</Label>
          <Input id="tagline" {...register("tagline")} />
        </div>

        <div className='grid gap-2'>
          <Label htmlFor="logo">Logo</Label>
          <Input type='file'  accept="image/*" id="logo" {...register("logo")} />
        </div>

        <div className='grid gap-2 sm:col-span-2'>
          <Label htmlFor="introduction">Introduction</Label>
          <Editor
           onChange={(_event, editor) => {
            const data = editor.getData();
            setValue("introduction", data, { shouldValidate: true });
          }}
           data={editorData?.introduction} // Pass the initial data to the editor
            id="introduction"
                    />
        
        </div>

        <div className='grid gap-2 sm:col-span-2'>
          <Label htmlFor="heroImage">Hero Image</Label>
          <Input type='file'  accept="image/*" id="heroImage" {...register("heroImage")} />
        </div>

        <div className='grid gap-2 sm:col-span-2'>
            <Label htmlFor="projectOverviewHeading">Project Overview Heading</Label>
            <Input id="projectOverviewHeading" {...register("projectOverviewHeading")} />
        </div>
             
        <div className='grid gap-2 sm:col-span-2'>
             <Label htmlFor="projectOverviewDescription">Project Description</Label>
             <Editor
             onChange={(_event, editor) => {
              const data = editor.getData();
              setValue("projectOverviewDescription", data, { shouldValidate: true });
            }}
             data={editorData?.projectOverviewDescription} // Pass the initial data to the editor
                id="projectOverviewDescription"
/>
        </div>

        <div className='grid gap-2 sm:col-span-2'>
           <Label htmlFor="projectOverviewImage">Project Overview Image</Label>
           <Input type='file'  accept="image/*" id="projectOverviewImage" {...register("projectOverviewImage")} />
        </div>

        <div className='grid gap-2 sm:col-span-2'>
               <Label htmlFor="challengeIconImage">challenge Icon Image</Label>
               <Input type='file'  accept="image/*" id="challengeIconImage" {...register("challengeIconImage")} />
        </div>

        <div className='grid gap-2 sm:col-span-2'>
          <Label htmlFor="challengeHeading">Challenge Heading</Label>
          <Input id="challengeHeading" {...register("challengeHeading")} />
        </div>

        <div className='grid gap-2 sm:col-span-2'>
          <Label htmlFor="challengeDescription">Challenge Description</Label>
          <Editor
             onChange={(_event, editor) => {
              const data = editor.getData();
              setValue("challengeDescription", data, { shouldValidate: true });
            }}
             data={editorData.challengeDescription} // Pass the initial data to the editor
                id="challengeDescription"
/>

        </div>

        <div className='grid gap-2 sm:col-span-2'>
         <Label htmlFor="solutionIconImage">Solution Icon Image</Label>
         <Input type='file'  accept="image/*" id="solutionIconImage" {...register("solutionIconImage")} />
        </div>

        <div className='grid gap-2 sm:col-span-2'>
          <Label htmlFor="solutionHeading">Solution Heading</Label>
          <Input id="solutionHeading" {...register("solutionHeading")} />
        </div>

        <div className='grid gap-2 sm:col-span-2'>
             <Label htmlFor="solutionDescription">Solution Description</Label>
             <Editor
              onChange={(_event, editor) => {
                const data = editor.getData();
                setValue("solutionDescription", data, { shouldValidate: true });
              }}
               data={editorData?.solutionDescription} // Pass the initial data to the editor
            id="solutionDescription"
/>
        </div>

        <div className='grid gap-2 sm:col-span-2'>
            <Label htmlFor="solutionDevelopmentHeading">Solution Development Heading</Label>
            <Input id="solutionDevelopmentHeading" {...register("solutionDevelopmentHeading")} />
        </div>
 
          <div className='grid gap-2 sm:col-span-2'>
            <Label htmlFor="solutionDevelopmentDescription">Solution Development Description</Label>
            <Editor
            onChange={(_event, editor) => {
              const data = editor.getData();
              setValue("solutionDevelopmentDescription", data, { shouldValidate: true });
            }}
             data={editorData?.solutionDevelopmentDescription} // Pass the initial data to the editor
                id="solutionDevelopmentDescription"
                          />
          </div>

         <div className='grid gap-2 sm:col-span-2'>
            <Label htmlFor="solutionImage">Solution Image</Label>
            <Input type='file'  accept="image/*" id="solutionImage" {...register("solutionImage")} />
         </div>

         <div className='grid gap-2 sm:col-span-2'>
            <Label htmlFor="keyFeaturesHeading">Key Features Heading</Label>
            <Input id="keyFeaturesHeading" {...register("keyFeaturesHeading")} />
         </div>

         <div className='grid gap-2 sm:col-span-2'>
            <Label htmlFor="conclusionHeading">Conclusion Heading</Label>
            <Input id="conclusionHeading" {...register("conclusionHeading")} />
         </div>

         <div className='grid gap-2 sm:col-span-2'>
            <Label htmlFor="conclusionDescription">Conclusion Description</Label>
            <Editor
               onChange={(_event, editor) => {
                const data = editor.getData();
                setValue("conclusionDescription", data, { shouldValidate: true });
              }}
               data={editorData?.conclusionDescription} // Pass the initial data to the editor
                id="conclusionDescription"
/>
         </div>

         <div className='grid gap-2 sm:col-span-2'>
             <Label htmlFor="securityHeading">Security Heading</Label>
             <Input id="securityHeading" {...register("securityHeading")} />
         </div>

         <div className='grid gap-2 sm:col-span-2'>
            <Label htmlFor="securityDescription">Security Description</Label>
            <Editor
               onChange={(_event, editor) => {
                const data = editor.getData();
                setValue("securityDescription", data, { shouldValidate: true });
              }}
               data={editorData?.securityDescription} // Pass the initial data to the editor
                id="securityDescription"
/>
         </div>


         <div className="flex justify-center sm:col-span-2">
          <Button type="submit" className="w-fit text-secondary bg-primary">
          {id ? "Update" : "Create"}
          </Button>
        </div>

      </form>
    </Form>
  )
}

export default PortfolioDetailsForm