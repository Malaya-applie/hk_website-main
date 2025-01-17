import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const brandLogoApi = createApi({
  reducerPath: "brandLogoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getBrandLogos: builder.query({
      query: () => "/brand-logos",
    }),
    createBrandLogo: builder.mutation({
      query: (newBrandLogo) => {
        const formData = new FormData();
        formData.append("name", newBrandLogo.name);
        formData.append("logo", newBrandLogo.logo[0]);
        return {
          url: "/brand-logos",
          method: "POST",
          body: formData,
        };
      },
    }),
    updateBrandLogo: builder.mutation({
      query: ({ id, ...updatedBrandLogo }) => {
        const formData = new FormData();
        formData.append("name", updatedBrandLogo.name);
        if (updatedBrandLogo.logo) {
          formData.append("logo", updatedBrandLogo.logo[0]);
        }
        return {
          url: `/brand-logos/${id}`,
          method: "PUT",
          body: formData,
        };
      },
    }),
    deleteBrandLogo: builder.mutation({
      query: (id) => ({
        url: `/brand-logos/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBrandLogosQuery,
  useCreateBrandLogoMutation,
  useUpdateBrandLogoMutation,
  useDeleteBrandLogoMutation,
} = brandLogoApi;
