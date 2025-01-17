import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const caseStudyApi = createApi({
  reducerPath: "caseStudyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getCaseStudies: builder.query({
      query: () => "/case-study",
    }),
    createCaseStudy: builder.mutation({
      query: (newClientImage) => {
        const formData = new FormData();
        formData.append("title", newClientImage.title);
        formData.append("description", newClientImage.description);
        formData.append("points", newClientImage.points);
        formData.append("button_text", newClientImage.button_text);
        formData.append("button_link", newClientImage.button_link);
        formData.append("image", newClientImage.image[0]);
        return {
          url: "/case-study",
          method: "POST",
          body: formData,
        };
      },
    }),
    updateCaseStudy: builder.mutation({
      query: ({ id, ...updatedCaseStudy }) => {
        const formData = new FormData();
        formData.append("title", updatedCaseStudy.title);
        formData.append("description", updatedCaseStudy.description);
        formData.append("points", updatedCaseStudy.points);
        formData.append("button_text", updatedCaseStudy.button_text);
        formData.append("button_link", updatedCaseStudy.button_link);
        if (updatedCaseStudy.image) {
          formData.append("image", updatedCaseStudy.image[0]);
        }
        return {
          url: `/case-study/${id}`,
          method: "PUT",
          body: formData,
        };
      },
    }),
    deleteCaseStudy: builder.mutation({
      query: (id) => ({
        url: `/case-study/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCaseStudiesQuery,
  useCreateCaseStudyMutation,
  useUpdateCaseStudyMutation,
  useDeleteCaseStudyMutation,
} = caseStudyApi;
