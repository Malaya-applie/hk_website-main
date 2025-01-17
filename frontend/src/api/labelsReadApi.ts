import { UpdateLabel } from "@/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const labelsReadApi = createApi({
  reducerPath: "labelsReadApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  }),
  endpoints: (builder) => ({
    getLabelsRead: builder.query({
      query: () => "/labels",
      transformResponse: (response: UpdateLabel[]) => {
        return response.reduce((acc, label: UpdateLabel) => {
          acc[label.label] = label.description;
          return acc;
        }, {} as Record<string, string>);
      },
    }),
  }),
});

export const { useGetLabelsReadQuery } = labelsReadApi;
