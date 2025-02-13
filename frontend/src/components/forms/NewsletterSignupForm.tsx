import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import * as z from "zod";
import { cn } from "@/lib/utils";

const newsletterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  agreed: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormData = z.infer<typeof newsletterSchema>;

export function NewsletterSignupForm({
  onSubmit,
  className,
}: {
  onSubmit: (data: FormData) => void;
  className?: string;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const agreedValue = watch("agreed", false);

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    onSubmit(data);
  };

  return (
    <form
  onSubmit={handleSubmit(onSubmitHandler)}
  className={cn("grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6", className)}
>
  <div className="grid gap-2">
    <Input
      id="name"
      {...register("name")}
      placeholder="Enter your name"
      className="rounded-none px-6 py-6"
    />
    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
  </div>
  <div className="grid gap-2">
    <Input
      id="email"
      {...register("email")}
      placeholder="Enter your email"
      className="rounded-none px-6 py-6"
    />
    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
  </div>
  <Button
    type="submit"
    className="w-full text-secondary bg-primary rounded-none px-6 py-6"
  >
    SUBSCRIBE
  </Button>
  <div className="grid col-span-1 md:col-span-3">
    <Label htmlFor="agreed" className="flex gap-2 items-center">
      <Checkbox
        id="agreed"
        checked={agreedValue}
        onCheckedChange={(checked) => setValue("agreed", checked === true)}
      />
      <p className="text-xs font-light lg:text-sm md:text-sm">
        By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
      </p>
    </Label>
    {errors.agreed && <p className="text-red-500">{errors.agreed.message}</p>}
  </div>
</form>

  );
}
