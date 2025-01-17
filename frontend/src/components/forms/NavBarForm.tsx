import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavBarFormProps } from "@/interface";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  link: z
    .string()
    .startsWith("/", "Link must start with /")
    .min(1, "Link is required"),
});

type FormData = z.infer<typeof schema>;

export function NavBarForm({ onSubmit, defaultValues }: NavBarFormProps) {
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

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="grid gap-4"
      noValidate
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name && (
          <p className="text-red-500">{errors.name.message as string}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="link">Link</Label>
        <Input id="link" {...register("link")} />
        {errors.link && (
          <p className="text-red-500">{errors.link.message as string}</p>
        )}
      </div>
      <Button type="submit" className="w-full text-secondary bg-primary">
        {defaultValues ? "Update" : "Create"}
      </Button>
    </form>
  );
}
