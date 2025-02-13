import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import { CreateNewsletter } from "@/interface";
import { createNewsletter } from "@/api/newsLetterApi";
import { useToast } from "@/hooks/useToast";
import { NewsletterSignupForm } from "./forms/NewsletterSignupForm";

const NewsLetter = () => {
  const { showSuccess, showError } = useToast();
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  const handleCreate = async (newNewsletter: CreateNewsletter) => {
    try {
      await createNewsletter(newNewsletter);
      showSuccess("Inquiry created successfully");
    } catch (error) {
      showError("Failed to create inquiry");
    }
  };

  return (
    <div className="lg:px-4 mx-10 lg:mx-20 py-10">
      <h4 className="text-xl lg:text-5xl mb-2 text-nowrap">{labelsRead?.newsletter_title}</h4>
      <p className="text-muted-foreground lg:text-2xl mb-8">
        {labelsRead?.newsletter_text}
      </p>
      <NewsletterSignupForm
        onSubmit={(data) => handleCreate(data)}
        className="bg-secondary"
      />
    </div>
  );
};

export default NewsLetter;
