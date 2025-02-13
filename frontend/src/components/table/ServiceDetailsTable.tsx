import React from 'react'
import { useEffect, useState } from "react";
import { DataTable } from "@/components/table/component/data-table";
import {generateColumns, DataItem } from "@/components/table/component/columns";
import { useToast } from "@/hooks/useToast";
import { useGetServiceDetailsTypeQuery, useDeleteServiceDetailMutation } from '@/api/serviceDetailsApi';


const ServiceDetailsTable = ({title}: {title: string}) => {
    const {data: serviceDetails, refetch} = useGetServiceDetailsTypeQuery();
    const [deleteServiceDetail, { isLoading, isError }] = useDeleteServiceDetailMutation();
    
    const {showSuccess, showError} = useToast();


 useEffect(() => {
    refetch()
 },[])



    const handleDelete = async (id) => {
        try {
            await deleteServiceDetail(id);
            refetch();
            showSuccess("Portfolio Service details deleted successfully");
            
        } catch (error) {
            showError("Failed to delete portfolio");
        }
    };

    const serviceDetailsWithHandlers: DataItem[] = serviceDetails?.map((service: any) => ({
        ...service,
        handleDelete: () => handleDelete(service.id),
    })) || [];

    const columns = generateColumns(serviceDetailsWithHandlers, [], ["handleDelete", "id"], true   );
    

    
  return (
    <div>
         <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
         <DataTable
            columns={columns}   
            data={serviceDetailsWithHandlers}
            // onMultipleDelete={handleMultipleDelete}
            searchableFields={["title", "category", "author"]}
            module="service-details"
      />
    </div>
  )
}

export default ServiceDetailsTable