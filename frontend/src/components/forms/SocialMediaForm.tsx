import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { SocialMediaFormProps } from "@/interface";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  link: z.string().min(1, "Link is required"),
  logo: z.union([z.string().optional(), z.instanceof(FileList).optional()]),
});

type FormData = z.infer<typeof schema>;

export function SocialMediaForm({
  onSubmit,
  defaultValues,
}: SocialMediaFormProps) {
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
        <Label htmlFor="link">Link</Label>
        <Input id="link" {...register("link")} />
        {errors.link && <p className="text-red-500">{errors.link.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="logo">Logo Image</Label>
        <Input
          id="logo"
          type="file"
          accept="image/*"
          {...register("logo")}
          onChange={handleFileChange}
        />
        {errors.logo && (
          <p className="text-red-500">
            {errors.logo.message as React.ReactNode}
          </p>
        )}
      </div>
      <div className="flex justify-around">
        {defaultValues?.logo && (
          <div className="flex flex-col items-center">
            <img
              src={`${import.meta.env.VITE_API_URL}/api/img/${
                defaultValues.logo
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
              alt="Logo Preview"
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
