import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { PostType } from "../model/types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["Posts", "Post"],
  endpoints: (builder) => ({
    getPostsByUserId: builder.query<PostType[], number>({
      query: (userId) => `/user/${userId}/posts`,
      providesTags: ["Posts"],
    }),
    getPostById: builder.query<PostType, number>({
      query: (postId) => `/posts/${postId}`,
      providesTags: ["Post"],
    }),
    addPosts: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsByUserIdQuery, useGetPostByIdQuery } = postsApi;
