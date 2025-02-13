import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { create } from 'domain'
import { get } from 'http'


export const technologyStackApi = createApi({
    reducerPath: 'technologyStackApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/api`,
    }),
    endpoints: (builder) => ({
        getTechnologyStacksByPortfolioId: builder.query({
            query: (id) => `/portfolio-tech-stack/${id}`,
            transformResponse: (response) => response.technologyStacks
        }),
        getAllTechnologyStacks: builder.query({
            query: () => `/portfolio-tech-stack`,
            transformResponse: (response) => response.technologyStacks
        }),
        getTechnologyStackById: builder.query({
            query: (id) => `/portfolio-tech-stack/technologyStack/${id}`,
            transformResponse: (response) => response.technologyStack
        }),
        createTechnologyStack: builder.mutation({
            query: (newTechnologyStack) => ({
                url: '/portfolio-tech-stack',
                method: 'POST',
                body: newTechnologyStack
            })  
        }),
        updateTechnologyStack: builder.mutation({
            query: ({id, formData}) => ({
                url: `/portfolio-tech-stack/${id}/update`,
                method: 'PUT',
                body: formData,
            }),
            
        }),
        deleteTechnologyStack: builder.mutation({
            query: (id) => ({
                url: `/portfolio-tech-stack/${id}/delete`,
                method: 'DELETE',
            }),
        })
    })
})

export const {useGetTechnologyStacksByPortfolioIdQuery, useGetAllTechnologyStacksQuery, useGetTechnologyStackByIdQuery, useCreateTechnologyStackMutation, useUpdateTechnologyStackMutation, useDeleteTechnologyStackMutation} = technologyStackApi