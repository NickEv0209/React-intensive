import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { CommentType } from "../model/types";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getComments: builder.query<CommentType[], number>({
      query: (postId) => `/comments?postId=${postId}`,
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
