import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clientFeedbackApi = createApi({
  reducerPath: "clientFeedbackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getClientFeedbacks: builder.query({
      query: () => "/client-feedback",
    }),
    createClientFeedback: builder.mutation({
      query: (newClientImage) => {
        const formData = new FormData();
        formData.append("name", newClientImage.name);
        formData.append("position", newClientImage.position);
        formData.append("company", newClientImage.company);
        formData.append("feedback", newClientImage.feedback);
        formData.append("userimage", newClientImage.userimage[0]);
        return {
          url: "/client-feedback",
          method: "POST",
          body: formData,
        };
      },
    }),
    updateClientFeedback: builder.mutation({
      query: ({ id, ...updatedClientFeedback }) => {
        const formData = new FormData();
        formData.append("name", updatedClientFeedback.name);
        formData.append("position", updatedClientFeedback.position);
        formData.append("company", updatedClientFeedback.company);
        formData.append("feedback", updatedClientFeedback.feedback);
        if (updatedClientFeedback.userimage) {
          formData.append("userimage", updatedClientFeedback.userimage[0]);
        }
        return {
          url: `/client-feedback/${id}`,
          method: "PUT",
          body: formData,
        };
      },
    }),
    deleteClientFeedback: builder.mutation({
      query: (id) => ({
        url: `/client-feedback/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetClientFeedbacksQuery,
  useCreateClientFeedbackMutation,
  useUpdateClientFeedbackMutation,
  useDeleteClientFeedbackMutation,
} = clientFeedbackApi;
