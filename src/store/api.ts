import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1338/api",
  }),
  endpoints: (builder) => ({
    postContactByName: builder.mutation({
      query: (contacts) => ({
        url: "/contactors",
        method: "post",
        body: { data: contacts },
      }),
    }),
    getContactByName: builder.query({
      query: () => ({
        url: "/contactors",
        method: "get",
      }),
    }),
  }),
});

export const { usePostContactByNameMutation, useGetContactByNameQuery } =
  contactApi;

//api/users-permissions/roles

///api/users
