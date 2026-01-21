import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { TodoType } from "../model/types";

export const todosApi = createApi({
  reducerPath: "/todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<TodoType[], number>({
      query: (userId) => `/todos?userId=${userId}`,
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
