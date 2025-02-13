import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const portfolioDetailsApi = createApi({
    reducerPath: 'portfolioDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}/api` }),
    endpoints: (builder) => ({
        getPortfolioDetails: builder.query({
            query: () => "/portfolio-details",
           
        }),
        getPortfolioDetail: builder.query({
            query: (id) => `/portfolio-details/${id}`,
            transformResponse: (response) => response.portfolio,
        }),
        getPortfolioFeature: builder.query({
            query: (id) => `/portfolio-features/${id}`,
        }),
        createPortfolio: builder.mutation({
            query: (data: FormData) => ({
              url: '/portfolio-details',
              method: 'POST',
              body: data,
            }),
          }),
          updatePortfolio: builder.mutation({
            query: ({ id, formData }) => ({
              url: `/portfolio-details/${id}/update`,
              method: 'PUT',
              body: formData,
            }),
          }),
          deletePortfolio: builder.mutation({
            query: (id) => ({
              url: `/portfolio-details/${id}/delete`,
              method: 'DELETE',
            }),
          })
    }),
})

export const { useGetPortfolioDetailsQuery, useGetPortfolioDetailQuery, useGetPortfolioFeatureQuery, useCreatePortfolioMutation, useUpdatePortfolioMutation, useDeletePortfolioMutation } = portfolioDetailsApi;