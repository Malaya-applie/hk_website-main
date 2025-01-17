import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const navbarApi = createApi({
  reducerPath: "navbarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getNavbars: builder.query({
      query: () => "/navbar",
    }),
    createNavbar: builder.mutation({
      query: (newNavbar) => ({
        url: "/navbar",
        method: "POST",
        body: newNavbar,
      }),
    }),
    updateNavbar: builder.mutation({
      query: ({ id, ...updatedNavbar }) => ({
        url: `/navbar/${id}`,
        method: "PUT",
        body: updatedNavbar,
      }),
    }),
    deleteNavbar: builder.mutation({
      query: (id) => ({
        url: `/navbar/${id}`,
        method: "DELETE",
      }),
    }),
    deleteMultipleNavbars: builder.mutation({
      query: (ids) => ({
        url: "/navbar",
        method: "DELETE",
        body: { ids },
      }),
    }),
  }),
});

export const {
  useGetNavbarsQuery,
  useCreateNavbarMutation,
  useUpdateNavbarMutation,
  useDeleteNavbarMutation,
  useDeleteMultipleNavbarsMutation,
} = navbarApi;
