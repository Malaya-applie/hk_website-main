import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import {
  useCreateCaseStudyMutation,
  useGetCaseStudiesQuery,
  useUpdateCaseStudyMutation,
} from "@/api/caseStudyApi";
import {
  setCaseStudies,
  addCaseStudy,
  updateCaseStudy,
} from "@/store/slices/caseStudySlice";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/useToast";
import { useNavigate, useParams } from "react-router-dom";
import { CaseStudyInterface, CreateCaseStudyInterface } from "@/interface";
import Editor from "@/components/editor/editor";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  button_text: z.string().min(1, "button text is required"),
  button_link: z.string().min(1, "button url is required"),
  description: z.string().min(1, "Description is required"),
  points: z.string().optional(),
  image: z.union([z.string().optional(), z.instanceof(FileList).optional()]),
});

type FormData = z.infer<typeof schema>;

export default function CaseStudyForm() {
  let defaultValues: CaseStudyInterface | undefined;
  const dispatch = useDispatch();
  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();

  const [preview, setPreview] = useState<string | null>(null);
  const [current, setCurrent] = useState<string | null>(null);
  const [editorData, setEditorData] = useState<string>("");
  const [editorData2, setEditorData2] = useState<string>("");
  const { data: fetchedCaseStudies } = useGetCaseStudiesQuery(undefined);
  const [createCaseStudy] = useCreateCaseStudyMutation();
  const [updateCaseStudyMutation] = useUpdateCaseStudyMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  watch("description");
  watch("points");

  useEffect(() => {
    if (fetchedCaseStudies) {
      if (id) {
        const selectedData = fetchedCaseStudies?.filter(
          (item: CaseStudyInterface) => item?.id == parseInt(id)
        );

        if (selectedData?.length !== 1) {
          showError("Something went wrong");
          navigate("/admin/case-study");
          return;
        }
        reset(selectedData[0]);
        setEditorData(selectedData[0].description);
        setEditorData2(selectedData[0].points);
        setCurrent(selectedData[0].image);
      }
      dispatch(setCaseStudies(fetchedCaseStudies));
    }
  }, [fetchedCaseStudies, dispatch]);

  const handleCreate = async (newUserImage: CreateCaseStudyInterface) => {
    try {
      const result = await createCaseStudy(newUserImage).unwrap();
      dispatch(addCaseStudy(result));
      showSuccess("Case study created successfully");
      navigate("/admin/case-study");
    } catch (error) {
      showError("Failed to create case study");
    }
  };

  const handleUpdate = async (
    id: string,
    updatedCaseStudy: CreateCaseStudyInterface
  ) => {
    try {
      const result = await updateCaseStudyMutation({
        id,
        ...updatedCaseStudy,
      }).unwrap();
      dispatch(updateCaseStudy(result));
      showSuccess("Case study updated successfully");
      navigate("/admin/case-study");
    } catch (error) {
      showError("Failed to update case study");
    }
  };

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    if (id) {
      handleUpdate(id, data);
    } else {
      handleCreate(data);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="grid gap-4 sm:grid-cols-2"
      noValidate
    >
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" {...register("title")} />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="image">Case Study Image</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          {...register("image")}
          onChange={handleFileChange}
        />
        {errors.image && (
          <p className="text-red-500">
            {errors.image.message as React.ReactNode}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="button_text">Button Text</Label>
        <Input id="button_text" {...register("button_text")} />
        {errors.button_text && (
          <p className="text-red-500">{errors.button_text.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="button_link">Button Link</Label>
        <Input id="button_link" {...register("button_link")} />
        {errors.button_link && (
          <p className="text-red-500">{errors.button_link.message}</p>
        )}
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="description">Description</Label>
        <Editor
          id="description"
          onChange={(_event, editor) => {
            const data = editor.getData();
            setValue("description", data, { shouldValidate: true });
          }}
          data={editorData} // Pass the initial data to the editor
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="points">Points</Label>
        <Editor
          id="points"
          onChange={(_event, editor) => {
            const data = editor.getData();
            setValue("points", data, { shouldValidate: true });
          }}
          data={editorData2} // Pass the initial data to the editor
        />
        {errors.points && (
          <p className="text-red-500">{errors.points.message}</p>
        )}
      </div>
      <div className="sm:col-span-2 flex justify-around">
        {current && (
          <div className="flex flex-col items-center">
            <img
              src={`${import.meta.env.VITE_API_URL}/api/img/${current}`}
              alt="Current User Image"
              className="w-32 h-32 object-contain"
            />
            <p className="text-sm text-muted-foreground">Current User Image</p>
          </div>
        )}
        {preview && (
          <div className="flex flex-col items-center">
            <img
              src={preview}
              alt="User Image Preview"
              className="w-32 h-32 object-contain"
            />
            <p className="text-sm text-muted-foreground">Preview</p>
          </div>
        )}
      </div>
      <div className="flex justify-center sm:col-span-2">
        <Button type="submit" className="w-fit text-secondary bg-primary">
          {current ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
}
