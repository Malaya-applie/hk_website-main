import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogFormProps } from "@/interface";

export function DialogForm({
  isOpen,
  onClose,
  formComponent,
  title,
  description,
}: DialogFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {formComponent}
      </DialogContent>
    </Dialog>
  );
}
