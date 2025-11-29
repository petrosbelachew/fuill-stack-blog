import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
  Blog,
  Writer,
  NewBlog,
  UpdateBlog,
  NewWriter,
  UpdateWriter,
  Credentials,
  AuthResponse,
} from "../api/types.ts"; // Assuming types.ts is in the same directory
// Define the API slice
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    // --- BLOG ENDPOINTS ---

    // Response: Blog[], Argument: void
    fetchBlogs: builder.query<Blog[], void>({
      query: () => "blog",
    }),

    // Response: Blog, Argument: number (Blog ID)
    fetchBlogById: builder.query<Blog, number>({
      query: (id) => `blog/${id}`,
    }),

    // Response: Blog, Argument: NewBlog (data to create)
    createBlog: builder.mutation<Blog, NewBlog>({
      query: (newBlog) => ({
        url: "blog",
        method: "POST",
        body: newBlog,
      }),
    }),

    // Response: Blog, Argument: { id: number, ...update }
    updateBlog: builder.mutation<Blog, { id: number; update: UpdateBlog }>({
      query: ({ id, update }) => ({
        // Note: Destructuring is clearer here
        url: `blog/${id}`,
        method: "PUT",
        body: update,
      }),
    }),

    // Response: { success: boolean }, Argument: number (ID)
    deleteBlog: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `blog/${id}`,
        method: "DELETE",
      }),
    }),

    // --- WRITER ENDPOINTS ---

    // Response: Writer[], Argument: void
    fetchWriters: builder.query<Writer[], void>({
      query: () => "writers",
    }),

    // Response: Writer, Argument: number (Writer ID)
    fetchWriterById: builder.query<Writer, number>({
      query: (id) => `writers/${id}`,
    }),

    // Response: Writer, Argument: NewWriter
    createWriter: builder.mutation<Writer, NewWriter>({
      query: (newWriter) => ({
        url: "writers",
        method: "POST",
        body: newWriter,
      }),
    }),

    // Response: Writer, Argument: { id: number, ...update }
    updateWriter: builder.mutation<
      Writer,
      { id: number; update: UpdateWriter }
    >({
      query: ({ id, update }) => ({
        url: `writers/${id}`,
        method: "PUT",
        body: update,
      }),
    }),

    // Response: { success: boolean }, Argument: number (ID)
    deleteWriter: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `writers/${id}`,
        method: "DELETE",
      }),
    }),

    // --- AUTH ENDPOINTS ---

    // Response: AuthResponse, Argument: Credentials
    login: builder.mutation<AuthResponse, Credentials>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // Response: AuthResponse, Argument: NewWriter (as NewUser)
    register: builder.mutation<AuthResponse, NewWriter>({
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
