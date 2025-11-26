import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: () => "blog",
    }),
    fetchBlogById: builder.query({
      query: (id) => `blog/${id}`,
    }),
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: "blog",
        method: "POST",
        body: newBlog,
      }),
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...update }) => ({
        url: `blog/${id}`,
        method: "PUT",
        body: update,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `blog/${id}`,
        method: "DELETE",
      }),
    }),
    fetchWriters: builder.query({
      query: () => "writers",
    }),
    fetchWriterById: builder.query({
      query: (id) => `writers/${id}`,
    }),
    createWriter: builder.mutation({
      query: (newWriter) => ({
        url: "writers",
        method: "POST",
        body: newWriter,
      }),
    }),
    updateWriter: builder.mutation({
      query: ({ id, ...update }) => ({
        url: `writers/${id}`,
        method: "PUT",
        body: update,
      }),
    }),
    deleteWriter: builder.mutation({
      query: (id) => ({
        url: `writers/${id}`,
        method: "DELETE",
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

// Export hooks for usage in functional components
export const {
  useFetchBlogsQuery,
  useFetchBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useFetchWritersQuery,
  useFetchWriterByIdQuery,
  useCreateWriterMutation,
  useUpdateWriterMutation,
  useDeleteWriterMutation,
  useLoginMutation,
  useRegisterMutation,
} = api;

export default api;
