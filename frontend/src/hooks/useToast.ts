import { useToast as useShadcnToast } from "@/hooks/use-toast";

export const useToast = () => {
  const { toast } = useShadcnToast();

  const showSuccess = (message: string) => {
    toast({
      title: "Success",
      description: message,
      variant: "default",
    });
  };

  const showError = (message: string) => {
    toast({
      title: "Error",
      description: message,
      variant: "destructive",
    });
  };

  return { showSuccess, showError };
};
