import React from 'react'
import { useEffect, useState } from "react";
import { DataTable } from "@/components/table/component/data-table";
import {generateColumns, DataItem } from "@/components/table/component/columns";
import { useToast } from "@/hooks/useToast";
import { useGetServiceDetailsImagesQuery, useDeleteServiceImageMutation } from '@/api/serviceDetailsApi';

const ServiceImagesTable = ({title}: {title: string}) => {
    const { data, refetch } = useGetServiceDetailsImagesQuery();
    const [deleteServiceImage, { isLoading, isError }] = useDeleteServiceImageMutation();
      
     const {showSuccess, showError} = useToast();

     const handleDelete = async (id) => {
        try {
            await deleteServiceImage(id);
            refetch();
            showSuccess("Service details image deleted successfully");
        } catch (error) {
            showError("Failed to delete portfolio");
        }
    };

     const serviceDetailsImagesWithHandlers: DataItem[] = data?.map((service: any) => ({
             ...service,
             handleDelete: () => handleDelete(service.id),
         })) || [];
     
         const columns = generateColumns(serviceDetailsImagesWithHandlers, ['serviceImage'], ["handleDelete", "id", 'ServicesTable', 'serviceImageDescription', 'serviceTypeId'], true   );




  return (
     <div>
             <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
             <DataTable
                columns={columns}   
                data={serviceDetailsImagesWithHandlers}
                // onMultipleDelete={handleMultipleDelete}
                searchableFields={["title", "category", "author"]}
                module="service-details-images"
          />
        </div>
  )
}

export default ServiceImagesTable