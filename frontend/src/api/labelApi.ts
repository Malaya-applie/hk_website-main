import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const labelApi = createApi({
  reducerPath: "labelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getLabels: builder.query({
      query: () => "/labels",
    }),
    createLabel: builder.mutation({
      query: (newLabel) => ({
        url: "/labels",
        method: "POST",
        body: newLabel,
      }),
    }),
    updateLabel: builder.mutation({
      query: ({ id, ...updatedLabel }) => ({
        url: `/labels/${id}`,
        method: "PUT",
        body: updatedLabel,
      }),
    }),
    deleteLabel: builder.mutation({
      query: (id) => ({
        url: `/labels/${id}`,
        method: "DELETE",
      }),
    }),
    deleteMultipleLabels: builder.mutation({
      query: (ids) => ({
        url: "/labels",
        method: "DELETE",
        body: { ids },
      }),
    }),
  }),
});

export const {
  useGetLabelsQuery,
  useCreateLabelMutation,
  useUpdateLabelMutation,
  useDeleteLabelMutation,
  useDeleteMultipleLabelsMutation,
} = labelApi;
