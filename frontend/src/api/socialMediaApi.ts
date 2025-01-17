import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const socialMediaApi = createApi({
  reducerPath: "socialMediaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getSocialMedias: builder.query({
      query: () => "/social-media",
    }),
    createSocialMedia: builder.mutation({
      query: (newSocialMedia) => {
        const formData = new FormData();
        formData.append("name", newSocialMedia.name);
        formData.append("link", newSocialMedia.link);
        formData.append("logo", newSocialMedia.logo[0]);
        return {
          url: "/social-media",
          method: "POST",
          body: formData,
        };
      },
    }),
    updateSocialMedia: builder.mutation({
      query: ({ id, ...updatedSocialMedia }) => {
        const formData = new FormData();
        formData.append("name", updatedSocialMedia.name);
        formData.append("link", updatedSocialMedia.link);
        if (updatedSocialMedia.logo) {
          formData.append("logo", updatedSocialMedia.logo[0]);
        }
        return {
          url: `/social-media/${id}`,
          method: "PUT",
          body: formData,
        };
      },
    }),
    deleteSocialMedia: builder.mutation({
      query: (id) => ({
        url: `/social-media/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetSocialMediasQuery,
  useCreateSocialMediaMutation,
  useUpdateSocialMediaMutation,
  useDeleteSocialMediaMutation,
} = socialMediaApi;
