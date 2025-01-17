import { useEffect, useState } from "react";
import { fetchInquiries, createInquiry } from "@/api/inquiryApi";
import { DataTable } from "@/components/table/component/data-table";
import {
  generateColumns,
  DataItem,
} from "@/components/table/component/columns";
import { DialogForm } from "@/components/forms/DialogForm";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { useToast } from "@/hooks/useToast";
import { CreateInquiry, UpdateInquiry } from "@/interface";

const InquiryComponent = ({ title }: { title: string }) => {
  const [inquiries, setInquiries] = useState<UpdateInquiry[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    const loadInquiries = async () => {
      try {
        const data = await fetchInquiries();
        setInquiries(data);
      } catch (error) {
        console.error("Failed to fetch inquiries", error);
      }
    };

    loadInquiries();
  }, []);

  const handleCreate = async (newNewsletter: CreateInquiry) => {
    try {
      await createInquiry(newNewsletter);
      const data = await fetchInquiries();
      setInquiries(data);
      setIsDialogOpen(false);
      showSuccess("Newsletter created successfully");
    } catch (error) {
      showError("Failed to create inquiry");
    }
  };

  const inquiriesWithHandlers: DataItem[] =
    inquiries?.map((inquiry: UpdateInquiry) => ({
      ...inquiry,
    })) || [];

  const columns = generateColumns(inquiriesWithHandlers, [], ["id"], false);

  return (
    <>
      <div>
        <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
        <DataTable
          columns={columns}
          data={inquiriesWithHandlers}
          searchableFields={["name", "email", "service"]}
        />
        <DialogForm
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          title="Create Inquiry"
          description="Create a new Inquiry with the following details."
          formComponent={
            <InquiryForm onSubmit={(data) => handleCreate(data)} />
          }
        />
      </div>
    </>
  );
};

export default InquiryComponent;
