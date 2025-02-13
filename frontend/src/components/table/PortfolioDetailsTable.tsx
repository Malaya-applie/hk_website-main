import { useEffect, useState } from "react";

import { DataTable } from "@/components/table/component/data-table";
import {generateColumns, DataItem } from "@/components/table/component/columns";
import { useToast } from "@/hooks/useToast";
import { useGetPortfolioDetailsQuery, useDeletePortfolioMutation } from "@/api/portfolioDetailsApi";




const PortfolioDetailsTable = ({title}: {title: string}) => {
     const {data: portfolioDetails , refetch} = useGetPortfolioDetailsQuery(undefined);
     const [deletePortfolio, { isLoading, isError }] = useDeletePortfolioMutation();


    const {showSuccess, showError} = useToast();
    
    useEffect(() => {
        refetch();
    }, [])


    const handleDelete = async (id) => {
        try {
            await deletePortfolio(id);
            refetch();
            showSuccess("Portfolio deleted successfully");
            
        } catch (error) {
            showError("Failed to delete portfolio");
        }
    };

    

    const portfoliosWithHandlers: DataItem[] = portfolioDetails?.portfolio.map((portfolio: any) => ({
        ...portfolio,
        handleDelete: () => handleDelete(portfolio.id),
    })) || [];

    const columns = generateColumns(portfoliosWithHandlers, ["logo", "heroImage"], ["projectOverviewImage", "solutionImage", "challengeIconImage",
    "solutionIconImage","handleDelete",
     "description", "challenge", "solution", "conclusionDescription", "introduction", "projectOverviewDescription", "challengeDescription", "solutionDescription", "solutionDevelopmentDescription", "securityDescription", "id", "projectOverviewHeading", "challengeHeading", "solutionHeading", "solutionDevelopmentHeading", "keyFeaturesHeading", "conclusionHeading", "securityHeading"], true   );

  return (
    <div>
         <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
         <DataTable
            columns={columns}   
            data={portfoliosWithHandlers}
            // onMultipleDelete={handleMultipleDelete}
            searchableFields={["title", "category", "author"]}
            module="portfolio-details"
      />
    </div>
  )
}

export default PortfolioDetailsTable