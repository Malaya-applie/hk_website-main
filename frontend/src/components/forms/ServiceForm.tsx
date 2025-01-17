import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ServiceFormProps } from "@/interface";
import { Textarea } from "../ui/textarea";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  icon: z.union([z.string().optional(), z.instanceof(FileList).optional()]),
});

type FormData = z.infer<typeof schema>;

export function ServiceForm({ onSubmit, defaultValues }: ServiceFormProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    onSubmit(data);
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
      className="grid gap-4"
      noValidate
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...register("description")} />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="icon">Service Icon</Label>
        <Input
          id="icon"
          type="file"
          accept="image/*"
          {...register("icon")}
          onChange={handleFileChange}
        />
        {errors.icon && (
          <p className="text-red-500">
            {errors.icon.message as React.ReactNode}
          </p>
        )}
      </div>
      <div className="flex justify-around">
        {defaultValues?.icon && (
          <div className="flex flex-col items-center">
            <img
              src={`${import.meta.env.VITE_API_URL}/api/img/${
                defaultValues.icon
              }`}
              alt="Current Logo"
              className="w-32 h-32 object-contain"
            />
            <p className="text-sm text-muted-foreground">Current Logo</p>
          </div>
        )}
        {preview && (
          <div className="flex flex-col items-center">
            <img
              src={preview}
              alt="Icon Preview"
              className="w-32 h-32 object-contain"
            />
            <p className="text-sm text-muted-foreground">Preview</p>
          </div>
        )}
      </div>
      <Button type="submit" className="w-full text-secondary bg-primary">
        {defaultValues ? "Update" : "Create"}
      </Button>
    </form>
  );
}
