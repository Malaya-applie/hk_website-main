import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/services",
    }),
    createService: builder.mutation({
      query: (newService) => {
        const formData = new FormData();
        formData.append("name", newService.name);
        formData.append("description", newService.description);
        formData.append("icon", newService.icon[0]);
        return {
          url: "/services",
          method: "POST",
          body: formData,
        };
      },
    }),
    updateService: builder.mutation({
      query: ({ id, ...updatedService }) => {
        const formData = new FormData();
        formData.append("name", updatedService.name);
        formData.append("description", updatedService.description);
        if (updatedService.icon) {
          formData.append("icon", updatedService.icon[0]);
        }
        return {
          url: `/services/${id}`,
          method: "PUT",
          body: formData,
        };
      },
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetServicesQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
