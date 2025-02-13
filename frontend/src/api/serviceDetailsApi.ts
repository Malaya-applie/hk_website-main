import { updateService } from '@/store/slices/serviceSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { create } from 'domain';
import { get } from 'http';


export const serviceDetailsApi = createApi({
    reducerPath: 'serviceDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}/api` }),
    endpoints: (builder) => ({
        getServiceDetailsImages: builder.query({
            query: () => `/serviceDetails/image/images`,
        }),
        getServiceDetailsType: builder.query({
            query: () => `/serviceDetails`,
        }),
        createServiceDetail: builder.mutation({
            query: (newServiceDetail) => ({
                url: `/serviceDetails`,
                method: "POST",
                body: newServiceDetail,
            }),
        }),
        updateServiceDetail: builder.mutation({
            query: ({ id, ...updatedServiceDetail }) => ({
                url: `/serviceDetails/${id}/update`,
                method: "PUT",
                body: updatedServiceDetail,
            }),
        }),
        getServiceDetail: builder.query({
            query: (id) => `/serviceDetails/${id}`,
        }),
        deleteServiceDetail: builder.mutation({
            query: (id) => ({
                url: `/serviceDetails/${id}/delete`,
                method: "DELETE",
            }),
        }),
        createServiceImage: builder.mutation({
            query: (data) => ({
                url: `/serviceDetails/image`,
                method: 'POST',
                body: data,
            }),
        }),
        updateServiceImage: builder.mutation({
            query: ({id, formData}) => ({
                url: `/serviceDetails/image/${id}/update`,
                method: 'PUT',
                body: formData,
            }),
        }),
        getServiceImage: builder.query({
            query: (id) => `/serviceDetails/image/${id}`,
        }),
        deleteServiceImage: builder.mutation({
            query: (id) => ({
                url: `/serviceDetails/image/${id}/delete`,
                method: 'DELETE',
            })
        })
    }),
})

export const { useGetServiceDetailsImagesQuery, useGetServiceDetailsTypeQuery, useCreateServiceDetailMutation, useUpdateServiceDetailMutation, useGetServiceDetailQuery, useCreateServiceImageMutation, useUpdateServiceImageMutation, useGetServiceImageQuery, useDeleteServiceDetailMutation, useDeleteServiceImageMutation } = serviceDetailsApi