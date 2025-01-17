import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getPortfolios: builder.query({
      query: () => "/portfolio",
    }),
    createPortfolio: builder.mutation({
      query: (newPortfolio) => {
        const formData = new FormData();
        formData.append("title", newPortfolio.title);
        formData.append("heading", newPortfolio.heading);
        formData.append("problem", newPortfolio.problem);
        formData.append("solution", newPortfolio.solution);
        formData.append("impact_1_title", newPortfolio.impact_1_title);
        formData.append("impact_1_stats", newPortfolio.impact_1_stats);
        formData.append("impact_2_title", newPortfolio.impact_2_title);
        formData.append("impact_2_stats", newPortfolio.impact_2_stats);
        formData.append("impact_3_title", newPortfolio.impact_3_title);
        formData.append("impact_3_stats", newPortfolio.impact_3_stats);
        formData.append("impact_4_title", newPortfolio.impact_4_title);
        formData.append("impact_4_stats", newPortfolio.impact_4_stats);
        formData.append("image", newPortfolio.image[0]);
        return {
          url: "/portfolio",
          method: "POST",
          body: formData,
        };
      },
    }),
    updatePortfolio: builder.mutation({
      query: ({ id, ...updatedPortfolio }) => {
        const formData = new FormData();
        formData.append("title", updatedPortfolio.title);
        formData.append("heading", updatedPortfolio.heading);
        formData.append("problem", updatedPortfolio.problem);
        formData.append("solution", updatedPortfolio.solution);
        formData.append("impact_1_title", updatedPortfolio.impact_1_title);
        formData.append("impact_1_stats", updatedPortfolio.impact_1_stats);
        formData.append("impact_2_title", updatedPortfolio.impact_2_title);
        formData.append("impact_2_stats", updatedPortfolio.impact_2_stats);
        formData.append("impact_3_title", updatedPortfolio.impact_3_title);
        formData.append("impact_3_stats", updatedPortfolio.impact_3_stats);
        formData.append("impact_4_title", updatedPortfolio.impact_4_title);
        formData.append("impact_4_stats", updatedPortfolio.impact_4_stats);
        if (updatedPortfolio.image) {
          formData.append("image", updatedPortfolio.image[0]);
        }
        return {
          url: `/portfolio/${id}`,
          method: "PUT",
          body: formData,
        };
      },
    }),
    deletePortfolio: builder.mutation({
      query: (id) => ({
        url: `/portfolio/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPortfoliosQuery,
  useCreatePortfolioMutation,
  useUpdatePortfolioMutation,
  useDeletePortfolioMutation,
} = portfolioApi;
