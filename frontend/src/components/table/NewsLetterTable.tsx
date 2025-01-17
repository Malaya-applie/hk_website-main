import { useEffect, useState } from "react";
import { fetchNewsletters, createNewsletter } from "@/api/newsLetterApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { DialogForm } from "@/components/forms/DialogForm";
import { NewsletterSignupForm } from "@/components/forms/NewsletterSignupForm";
import { useToast } from "@/hooks/useToast";
import { CreateNewsletter, UpdateNewsletter } from "@/interface";

const NewsletterSignupComponent = ({ title }: { title: string }) => {
  const [newsletters, setNewsletters] = useState<UpdateNewsletter[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    const loadNewsletters = async () => {
      try {
        const data = await fetchNewsletters();
        setNewsletters(data);
      } catch (error) {
        console.error("Failed to fetch newsletters", error);
      }
    };

    loadNewsletters();
  }, []);

  const handleCreate = async (newNewsletter: CreateNewsletter) => {
    try {
      await createNewsletter(newNewsletter);
      const data = await fetchNewsletters();
      setNewsletters(data);
      setIsDialogOpen(false);
      showSuccess("Newsletter created successfully");
    } catch (error) {
      showError("Failed to create newsletter");
    }
  };

  const newslettersWithHandlers: DataItem[] =
    newsletters?.map((newsletter: UpdateNewsletter) => ({
      ...newsletter,
    })) || [];

  const columns = generateColumns(newslettersWithHandlers, [], ["id"], false);

  return (
    <>
      <div>
        <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
        <DataTable
          columns={columns}
          data={newslettersWithHandlers}
          // setIsDialogOpen={() => {
          //   setIsDialogOpen(true);
          // }}
          searchableFields={["name", "email", "agreed"]}
        />
        <DialogForm
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          title="Create Label"
          description="Create a new label with the following details."
          formComponent={
            <NewsletterSignupForm onSubmit={(data) => handleCreate(data)} />
          }
        />
      </div>
    </>
  );
};

export default NewsletterSignupComponent;
