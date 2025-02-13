import React from 'react'
import { useEffect, useState } from "react";
import { DataTable } from "@/components/table/component/data-table";
import {generateColumns, DataItem } from "@/components/table/component/columns";
import { useToast } from "@/hooks/useToast";
import {useGetAllTechnologyStacksQuery, useDeleteTechnologyStackMutation} from "@/api/technologyStackApi"

const TechnologyStackTable = ({title}: {title: string}) => {
    const {data: technologyStacks, refetch} = useGetAllTechnologyStacksQuery();
    const [deleteTechnologyStack, { isLoading, isError }] = useDeleteTechnologyStackMutation();
    const {showSuccess, showError} = useToast();

     const handleDelete = async (id) => {
        try {
            await deleteTechnologyStack(id);
            refetch();
            showSuccess("Key feature deleted successfully");
        } catch (error) {
            showError("Failed to delete key feature")
        }
    }


     const technologyStackWithHandlers: DataItem[] = technologyStacks?.map((technologyStack: any) => ({
            ...technologyStack,
            handleDelete: () => handleDelete(technologyStack.id),
        })) || [];
    
        const columns = generateColumns(technologyStackWithHandlers, ['technologyImage'], ['portfolioDetailId', 'id', 'handleDelete'], true);


  return (
    <div>
        <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
        <DataTable
            columns={columns}   
            data={technologyStackWithHandlers}
            // onMultipleDelete={handleMultipleDelete}
            searchableFields={["title", "description"]}
            module="portfolio-technology-stack"
        />
    </div>
  )
}

export default TechnologyStackTable