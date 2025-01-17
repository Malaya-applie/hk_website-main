import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

// Define a type for your data
export type DataItem = {
  [key: string]: any;
  handleUpdate?: () => void;
  handleDelete?: () => void;
};

// Function to generate columns dynamically
export function generateColumns(
  data: DataItem[],
  imageFields: string[] = [],
  removeFields: string[] = [],
  checkbox: boolean
): ColumnDef<DataItem>[] {
  if (data.length === 0) return [];

  const sampleItem = data[0];
  const columns: ColumnDef<DataItem>[] = Object.keys(sampleItem)
    .filter((key) => !removeFields.includes(key))
    .map((key) => {
      if (key === "createdAt" || key === "updatedAt") {
        return {
          accessorKey: key,
          header: key.charAt(0).toUpperCase() + key.slice(1),
          cell: ({ row }) => {
            const date = new Date(row.getValue(key));
            return date.toLocaleDateString();
          },
        };
      }
      if (imageFields.includes(key)) {
        // Check if the key is in the image fields array
        return {
          accessorKey: key,
          header: key.charAt(0).toUpperCase() + key.slice(1), // Use the key name for the header
          cell: ({ row }) => {
            const imageUrl = row.getValue(key);
            return imageUrl ? (
              <img
                src={`${import.meta.env.VITE_API_URL}/api/img/${imageUrl}`}
                alt="Image"
                className="w-16 h-16 object-contain"
              />
            ) : (
              "No Image"
            );
          },
        };
      }
      return {
        accessorKey: key,
        header: key.charAt(0).toUpperCase() + key.slice(1),
      };
    });

  // Add a checkbox column for row selection
  if (checkbox) {
    columns.unshift({
      id: "select",
      header: ({ table }) => (
        <Checkbox
          className="border-primary-foreground ml-5 w-5 h-5 data-[state=checked]:bg-primary data-[state=checked]:text-secondary"
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          className="border-primary-foreground ml-5 w-5 h-5 data-[state=checked]:bg-primary data-[state=checked]:text-secondary"
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    });
  }

  return columns;
}
