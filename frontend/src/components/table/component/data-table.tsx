import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DataItem } from "@/components/table/component/columns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ArrowDown, ArrowUp, Search } from "lucide-react";
import Paginator from "./paginator";
import { useNavigate } from "react-router-dom";

 
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onMultipleDelete?: (ids: string[]) => void;
  setIsDialogOpen?: (isOpen: boolean) => void;
  searchableFields: (keyof TData)[];
  module?: string;
}

export function DataTable<TData extends DataItem, TValue>({
  columns,
  data,
  onMultipleDelete,
  setIsDialogOpen,
  searchableFields,
  module,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const navigate = useNavigate();

  const filteredData = React.useMemo(() => {
    return data.filter((item) =>
      searchableFields.some((field) =>
        String(item[field]).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery, searchableFields]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    state: {
      rowSelection,
      sorting,
    },
  });

  const selectedRowIds = table
    .getSelectedRowModel()
    .rows.map((row) => row.original.id);

  return (
    <div>
      <div className="flex items-center py-4">
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-primary" />
          <Input
            name="Search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex w-full justify-end gap-2">
          {onMultipleDelete && (
            <Button
              variant="outline"
              onClick={() => onMultipleDelete(selectedRowIds)}
              disabled={selectedRowIds.length === 0}
            >
              Delete Selected
            </Button>
          )}
          {module && (
            <Button
              variant="outline"
              onClick={() => {
                navigate(`/admin/${module}/create`);
              }}
            >
              Create
            </Button>
          )}
          {setIsDialogOpen && (
            <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
              Create
            </Button>
          )}
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="font-semibold text-lg text-foreground cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {{
                      asc: <ArrowDown className="ml-2 h-4 w-4 inline-block" />,
                      desc: <ArrowUp className="ml-2 h-4 w-4 inline-block" />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    {setIsDialogOpen || module ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="h-8">
                            Actions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {module && (
                            <DropdownMenuItem
                              onClick={() => {
                                navigate(
                                  `/admin/${module}/${row.original.id}/update`
                                );
                              }}
                            >
                              Update
                            </DropdownMenuItem>
                          )}
                          {setIsDialogOpen && (
                            <DropdownMenuItem
                              onClick={row.original.handleUpdate}
                            >
                              Update
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem onClick={row.original.handleDelete}>
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : null}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length
            ? `${table.getFilteredSelectedRowModel().rows.length} of `
            : null}
          {table.getFilteredRowModel().rows.length} row(s)
        </div>
        <div className="flex justify-end">
          <Paginator table={table} />
        </div>
      </div>
    </div>
  );
}
