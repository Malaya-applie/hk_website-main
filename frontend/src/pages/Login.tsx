import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlices";
import { LoginForm } from "@/components/forms/LoginForm";
import { login } from "@/api/apiService"; // Import the login function
import { useToast } from "@/hooks/useToast"; // Import the toast hook

const schema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast(); // Use the toast hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await login(data);
      localStorage.setItem("token", response.token);
      dispatch(setUser(response.user));
      showSuccess("Login successful"); // Show success toast
      navigate("/admin");
    } catch (error) {
      showError("Login failed"); // Show error toast
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default Login;
