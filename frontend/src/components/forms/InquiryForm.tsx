import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as z from "zod";
import { useGetServicesQuery } from "@/api/serviceApi";
import { UpdateService } from "@/interface";
import { cn } from "@/lib/utils";

const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  service: z.string({
    required_error: "Please select a service.",
  }),
});

type FormData = z.infer<typeof inquirySchema>;

export function InquiryForm({
  onSubmit,
  className,
}: {
  onSubmit: (data: FormData) => void;
  className?: string;
}) {
  const form = useForm<FormData>({
    resolver: zodResolver(inquirySchema),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const { data: services } = useGetServicesQuery(undefined);

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className={cn("grid px-6 sm:px-14 py-16 gap-8", className)}
      >
        <p className="text-center text-xl">
          Please fill out the form and I will be in touch
        </p>
        <div className="grid gap-2">
          {/* <Label htmlFor="name">Name</Label> */}
          <Input
            id="name"
            {...register("name")}
            className="border-l-0 border-t-0 border-r-0 rounded-none border-b-2 px-0"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="grid gap-2">
          {/* <Label htmlFor="email">Email</Label> */}
          <Input
            id="email"
            {...register("email")}
            className="border-l-0 border-t-0 border-r-0 rounded-none border-b-2 px-0"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <FormField
          control={control}
          name="service"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Service</FormLabel> */}
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="border-l-0 border-t-0 border-r-0 rounded-none border-b-2 px-0">
                  <SelectTrigger>
                    <SelectValue placeholder="Services" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services?.map((service: UpdateService) => (
                    <SelectItem key={service.id} value={service.name}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full text-secondary bg-primary font-bold"
        >
          SUBMIT FORM
        </Button>
        <p>
          By continuing, you agree to{" "}
          <a className="font-bold" href="#">
            Terms & conditions
          </a>{" "}
          and{" "}
          <a className="font-bold" href="#">
            Privacy policy
          </a>
        </p>
      </form>
    </Form>
  );
}
