import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LabelFormProps } from "@/interface";

const schema = z.object({
  label: z.string().min(1, "Label is required"),
  description: z.string().min(1, "Description is required"),
});

type FormData = z.infer<typeof schema>;

export function LabelForm({ onSubmit, defaultValues }: LabelFormProps) {
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
        <Label htmlFor="label">Label</Label>
        <Input id="label" {...register("label")} />
        {errors.label && <p className="text-red-500">{errors.label.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Input id="description" {...register("description")} />
      </div>
      <Button type="submit" className="w-full text-secondary bg-primary">
        {defaultValues ? "Update" : "Create"}
      </Button>
    </form>
  );
}
