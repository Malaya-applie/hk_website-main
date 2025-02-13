import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const keyFeaturesApi = createApi({
    reducerPath: "keyFeaturesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/api`,
    }),
    endpoints: (builder) => ({
        getKeyFeatures: builder.query({
            query: () => "/portfolio-features",
            transformResponse: (response) => response.features,
        }),
        getKeyFeaturesByPortfolioId: builder.query({
            query: () => "/portfolio-features/2",
        }),
        getKeyFeatureById: builder.query({
            query: (id) => `/portfolio-features/feature/${id}`,
            transformResponse: (response) => response.feature,
        }),
        
        createKeyFeature: builder.mutation({
            query: (newKeyFeature) => ({
                url: "/portfolio-features",
                method: "POST",
                body: newKeyFeature,
            }),
        }),
         
        updateKeyFeature: builder.mutation({
            query: ({id, updatedKeyFeature}) => ({
                url: `/portfolio-features/${id}/update`,
                method: "PUT",
                body: updatedKeyFeature,
            }),
        }),
        deleteKeyFeature: builder.mutation({
            query: (id) => ({
                url: `/portfolio-features/${id}/delete`,
                method: "DELETE",
            }),
        })
    }),
})


export const { useGetKeyFeaturesQuery, useCreateKeyFeatureMutation, useGetKeyFeaturesByPortfolioIdQuery, useGetKeyFeatureByIdQuery, useUpdateKeyFeatureMutation, useDeleteKeyFeatureMutation } = keyFeaturesApi;