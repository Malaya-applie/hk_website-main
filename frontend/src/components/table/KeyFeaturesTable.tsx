import React from 'react'
import { useEffect, useState } from "react";
//  will import functions here to fetch and delete portfolios
import { DataTable } from "@/components/table/component/data-table";
import {generateColumns, DataItem } from "@/components/table/component/columns";
import { useToast } from "@/hooks/useToast";
import { useGetKeyFeaturesQuery, useDeleteKeyFeatureMutation } from "@/api/keyFeaturesApi";




const KeyFeaturesTable = ({title}: {title: string}) => {
    const {data: keyFeatures, refetch} = useGetKeyFeaturesQuery(undefined);
    const [deleteKeyFeature, { isLoading, isError }] = useDeleteKeyFeatureMutation();
    const {showSuccess, showError} = useToast();


   useEffect(() => {
       refetch();
   }, [])





    const handleDelete = async (id) => {
        try {
            await deleteKeyFeature(id);
            refetch();
            showSuccess("Key feature deleted successfully");
        } catch (error) {
            showError("Failed to delete key feature")
        }
    }
    

    const keyFeaturesWithHandlers: DataItem[] = keyFeatures?.map((keyFeature: any) => ({
        ...keyFeature,
        handleDelete: () => handleDelete(keyFeature.id),
    })) || [];

    const columns = generateColumns(keyFeaturesWithHandlers, [], ['description', 'handleDelete', 'portfolioId', 'id'], true);

   
  return (
    <div>
        <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
        <DataTable
            columns={columns}   
            data={keyFeaturesWithHandlers}
            // onMultipleDelete={handleMultipleDelete}
            searchableFields={["title", "description"]}
            module="portfolio-details-key-features"
      />
    </div>
  )
}

export default KeyFeaturesTable