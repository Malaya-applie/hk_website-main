import { Toast as shadcnToast, ToastProps } from "@/components/ui/toast";

export const toast = {
  success: (message: string) => {
    shadcnToast({
      title: "Success",
      children: message,
      variant: "default",
    } as ToastProps);
  },
  error: (message: string) => {
    shadcnToast({
      title: "Error",
      children: message,
      variant: "destructive",
    } as ToastProps);
  },
};
