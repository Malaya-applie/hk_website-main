import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { fetchBlogById } from "@/api/blogApi";
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
import { createBlog, updateBlog } from "@/api/blogApi";
import { useToast } from "@/hooks/useToast";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateBlog, CreateBlogInterface, UpdateCategory } from "@/interface";
import Editor from "@/components/editor/editor";
import { useGetCategoriesQuery } from "@/api/categoryApi";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  introduction: z.string().min(1, "Introduction is required"),
  author: z.string().min(1, "Author is required"),
  description: z.string().min(1, "Description is required"),
  categoryId: z.string({
    required_error: "Please select a category.",
  }),
  image: z.union([z.string().optional(), z.instanceof(FileList).optional()]),
});

type FormData = z.infer<typeof schema>;

export default function BlogForm() {
  let defaultValues: UpdateBlog | undefined;
  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();

  const [preview, setPreview] = useState<string | null>(null);
  const [current, setCurrent] = useState<string | null>(null);
  const [editorData, setEditorData] = useState<string>("");

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = form;
  const { data: categories } = useGetCategoriesQuery(undefined);

  watch("description");

  const getBlogById = async (id: number) => {
    try {``
      const selectedData = await fetchBlogById(id);
      reset(selectedData);
      setEditorData(selectedData.description);
      setCurrent(selectedData.image);
    } catch (error) {
      showError("Failed to fetch blog by id");
    }
  };

  useEffect(() => {
    if (id) {
      getBlogById(parseInt(id));
    }
  }, []);

  const handleCreate = async (newBlog: CreateBlogInterface) => {
    try {
      await createBlog(newBlog);
      showSuccess("Blog created successfully");
      navigate("/admin/blog");
    } catch (error) {
      showError("Failed to create blog");
    }
  };

  const handleUpdate = async (id: string, updatedBlog: CreateBlogInterface) => {
    try {
      await updateBlog({
        id: parseInt(id),
        ...updatedBlog,
      });
      showSuccess("Blog updated successfully");
      navigate("/admin/blog");
    } catch (error) {
      showError("Failed to update blog");
    }
  };

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    if (id) {
      handleUpdate(id, {
        ...data,
        image: data.image ? data.image : undefined,
      });
    } else {
      handleCreate({
        ...data,
        image: data.image ? data.image : undefined,
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="grid gap-4 sm:grid-cols-2"
      >
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title")} />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="image">Blog Image</Label>
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
          <Label htmlFor="introduction">introduction</Label>
          <Textarea id="introduction" {...register("introduction")} />
          {errors.introduction && (
            <p className="text-red-500">{errors.introduction.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="author">Author</Label>
          <Input id="author" {...register("author")} />
          {errors.author && (
            <p className="text-red-500">{errors.author.message}</p>
          )}
        </div>
        <FormField
          control={control}
          name="categoryId"
          render={({ field }) => (
            <FormItem key={field.value}>
              <FormLabel>Category</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(value)}
                defaultValue={field.value?.toString()} // Default value support
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories?.map((category: UpdateCategory) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <div className="sm:col-span-2 flex justify-around">
          {current && (
            <div className="flex flex-col items-center">
              <img
                src={`${import.meta.env.VITE_API_URL}/api/img/${current}`}
                alt="Current User Image"
                className="w-32 h-32 object-contain"
              />
              <p className="text-sm text-muted-foreground">
                Current Blog Image
              </p>
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
    </Form>
  );
}
