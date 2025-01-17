import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import {
  useCreateClientFeedbackMutation,
  useGetClientFeedbacksQuery,
  useUpdateClientFeedbackMutation,
} from "@/api/clientFeedbackApi";
import {
  setClientFeedbacks,
  addClientFeedback,
  updateClientFeedback,
} from "@/store/slices/clientFeedbackSlice";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/useToast";
import { useNavigate, useParams } from "react-router-dom";
import {
  ClientFeedbackInterface,
  CreateClientFeedbackInterface,
} from "@/interface";
import Editor from "@/components/editor/editor";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  position: z.string().optional(),
  company: z.string().optional(),
  feedback: z.string().min(1, "Feedback is required"),
  userimage: z.union([
    z.string().optional(),
    z.instanceof(FileList).optional(),
  ]),
});

type FormData = z.infer<typeof schema>;

export default function ClientFeedbackForm() {
  let defaultValues: ClientFeedbackInterface | undefined;
  const dispatch = useDispatch();
  const { showSuccess, showError } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();

  const [preview, setPreview] = useState<string | null>(null);
  const [current, setCurrent] = useState<string | null>(null);
  const [editorData, setEditorData] = useState<string>("");
  const { data: fetchedClientFeedbacks } =
    useGetClientFeedbacksQuery(undefined);
  const [createClientFeedback] = useCreateClientFeedbackMutation();
  const [updateClientFeedbackMutation] = useUpdateClientFeedbackMutation();

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

  watch("feedback");

  useEffect(() => {
    if (fetchedClientFeedbacks) {
      if (id) {
        const selectedData = fetchedClientFeedbacks?.filter(
          (item: ClientFeedbackInterface) => item?.id == parseInt(id)
        );

        if (selectedData?.length !== 1) {
          showError("Something went wrong");
          navigate("/admin/client-feedback");
          return;
        }
        reset(selectedData[0]);
        setEditorData(selectedData[0].feedback);
        setCurrent(selectedData[0].userimage);
      }
      dispatch(setClientFeedbacks(fetchedClientFeedbacks));
    }
  }, [fetchedClientFeedbacks, dispatch]);

  const handleCreate = async (newUserImage: CreateClientFeedbackInterface) => {
    try {
      const result = await createClientFeedback(newUserImage).unwrap();
      dispatch(addClientFeedback(result));
      showSuccess("Client feedback created successfully");
      navigate("/admin/client-feedback");
    } catch (error) {
      showError("Failed to create client feedback");
    }
  };

  const handleUpdate = async (
    id: string,
    updatedClientFeedback: CreateClientFeedbackInterface
  ) => {
    try {
      const result = await updateClientFeedbackMutation({
        id,
        ...updatedClientFeedback,
      }).unwrap();
      dispatch(updateClientFeedback(result));
      showSuccess("Client feedback updated successfully");
      navigate("/admin/client-feedback");
    } catch (error) {
      showError("Failed to update client feedback");
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
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="userimage">User Image</Label>
        <Input
          id="userimage"
          type="file"
          accept="image/*"
          {...register("userimage")}
          onChange={handleFileChange}
        />
        {errors.userimage && (
          <p className="text-red-500">
            {errors.userimage.message as React.ReactNode}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" {...register("company")} />
        {errors.company && (
          <p className="text-red-500">{errors.company.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="position">Position</Label>
        <Input id="position" {...register("position")} />
        {errors.position && (
          <p className="text-red-500">{errors.position.message}</p>
        )}
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="feedback">Feedback</Label>
        <Editor
          id="feedback"
          onChange={(_event, editor) => {
            const data = editor.getData();
            setValue("feedback", data, { shouldValidate: true });
          }}
          data={editorData} // Pass the initial data to the editor
        />
        {errors.feedback && (
          <p className="text-red-500">{errors.feedback.message}</p>
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
