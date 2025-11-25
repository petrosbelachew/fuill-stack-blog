import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://your-backend-url.com/api" }),
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: () => "blogs",
    }),

    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: "blogs",
        method: "POST",
        body: newBlog,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (newUser) => ({
        url: "auth/register",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useCreateBlogMutation,
  useLoginMutation,
  useRegisterMutation,
} = api;

export default api;
