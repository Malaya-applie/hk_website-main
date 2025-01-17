import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import {
  useCreatePortfolioMutation,
  useGetPortfoliosQuery,
  useUpdatePortfolioMutation,
} from "@/api/portfolioApi";
import {
  setPortfolios,
  addPortfolio,
  updatePortfolio,
} from "@/store/slices/portfolioSlice";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/useToast";
import { useNavigate, useParams } from "react-router-dom";
import { PortfolioInterface, CreatePortfolioInterface } from "@/interface";
import Editor from "@/components/editor/editor";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  heading: z.string().min(1, "heading is required"),
  problem: z.string().min(1, "Problem is required"),
  solution: z.string().min(1, "Solution is required"),
  impact_1_title: z.string().optional(),
  impact_1_stats: z.string().optional(),
  impact_2_title: z.string().optional(),
  impact_2_stats: z.string().optional(),
  impact_3_title: z.string().optional(),
  impact_3_stats: z.string().optional(),
  impact_4_title: z.string().optional(),
  impact_4_stats: z.string().optional(),
  image: z.union([z.string().optional(), z.instanceof(FileList).optional()]),
});

type FormData = z.infer<typeof schema>;

export default function PortfolioForm() {
  let defaultValues: PortfolioInterface | undefined;
  const dispatch = useDispatch();
  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();

  const [preview, setPreview] = useState<string | null>(null);
  const [current, setCurrent] = useState<string | null>(null);
  const [editorData, setEditorData] = useState<string>("");
  const [editorData2, setEditorData2] = useState<string>("");
  const { data: fetchedPortfolios } = useGetPortfoliosQuery(undefined);
  const [createPortfolio] = useCreatePortfolioMutation();
  const [updatePortfolioMutation] = useUpdatePortfolioMutation();

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

  watch("problem");
  watch("solution");

  useEffect(() => {
    if (fetchedPortfolios) {
      if (id) {
        const selectedData = fetchedPortfolios?.filter(
          (item: PortfolioInterface) => item?.id == parseInt(id)
        );

        if (selectedData?.length !== 1) {
          showError("Something went wrong");
          navigate("/admin/portfolio");
          return;
        }
        reset(selectedData[0]);
        setEditorData(selectedData[0].problem);
        setEditorData2(selectedData[0].solution);
        setCurrent(selectedData[0].image);
      }
      dispatch(setPortfolios(fetchedPortfolios));
    }
  }, [fetchedPortfolios, dispatch]);

  const handleCreate = async (newPortfolioImage: CreatePortfolioInterface) => {
    try {
      const result = await createPortfolio(newPortfolioImage).unwrap();
      dispatch(addPortfolio(result));
      showSuccess("Portfolio created successfully");
      navigate("/admin/portfolio");
    } catch (error) {
      showError("Failed to create portfolio");
    }
  };

  const handleUpdate = async (
    id: string,
    updatedPortfolio: CreatePortfolioInterface
  ) => {
    try {
      const result = await updatePortfolioMutation({
        id,
        ...updatedPortfolio,
      }).unwrap();
      dispatch(updatePortfolio(result));
      showSuccess("Portfolio updated successfully");
      navigate("/admin/portfolio");
    } catch (error) {
      showError("Failed to update portfolio");
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
        <Label htmlFor="image">Image</Label>
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
        <Label htmlFor="heading">Heading</Label>
        <Input id="heading" {...register("heading")} />
        {errors.heading && (
          <p className="text-red-500">{errors.heading.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="impact_1_title">Impact Title 1</Label>
        <Input id="impact_1_title" {...register("impact_1_title")} />
        {errors.impact_1_title && (
          <p className="text-red-500">{errors.impact_1_title.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="impact_1_stats">Impact Stats 1</Label>
        <Input id="impact_1_stats" {...register("impact_1_stats")} />
        {errors.impact_1_stats && (
          <p className="text-red-500">{errors.impact_1_stats.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="impact_2_title">Impact Title 2</Label>
        <Input id="impact_2_title" {...register("impact_2_title")} />
        {errors.impact_2_title && (
          <p className="text-red-500">{errors.impact_2_title.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="impact_2_stats">Impact Stats 2</Label>
        <Input id="impact_2_stats" {...register("impact_2_stats")} />
        {errors.impact_2_stats && (
          <p className="text-red-500">{errors.impact_2_stats.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="impact_3_title">Impact Title 3</Label>
        <Input id="impact_3_title" {...register("impact_3_title")} />
        {errors.impact_3_title && (
          <p className="text-red-500">{errors.impact_3_title.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="impact_3_stats">Impact Stats 3</Label>
        <Input id="impact_3_stats" {...register("impact_3_stats")} />
        {errors.impact_3_stats && (
          <p className="text-red-500">{errors.impact_3_stats.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="impact_4_title">Impact Title 4</Label>
        <Input id="impact_4_title" {...register("impact_4_title")} />
        {errors.impact_4_title && (
          <p className="text-red-500">{errors.impact_4_title.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="impact_4_stats">Impact Stats 4</Label>
        <Input id="impact_4_stats" {...register("impact_4_stats")} />
        {errors.impact_4_stats && (
          <p className="text-red-500">{errors.impact_4_stats.message}</p>
        )}
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="problem">Description</Label>
        <Editor
          id="problem"
          onChange={(_event, editor) => {
            const data = editor.getData();
            setValue("problem", data, { shouldValidate: true });
          }}
          data={editorData} // Pass the initial data to the editor
        />
        {errors.problem && (
          <p className="text-red-500">{errors.problem.message}</p>
        )}
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="solution">Points</Label>
        <Editor
          id="solution"
          onChange={(_event, editor) => {
            const data = editor.getData();
            setValue("solution", data, { shouldValidate: true });
          }}
          data={editorData2} // Pass the initial data to the editor
        />
        {errors.solution && (
          <p className="text-red-500">{errors.solution.message}</p>
        )}
      </div>
      <div className="sm:col-span-2 flex justify-around">
        {current && (
          <div className="flex flex-col items-center">
            <img
              src={`${import.meta.env.VITE_API_URL}/api/img/${current}`}
              alt="Current Portfolio Image"
              className="w-32 h-32 object-contain"
            />
            <p className="text-sm text-muted-foreground">
              Current Portfolio Image
            </p>
          </div>
        )}
        {preview && (
          <div className="flex flex-col items-center">
            <img
              src={preview}
              alt="Portfolio Image Preview"
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
