import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

import type { UserType } from "../model/types";

export const usersApi = createApi({
  reducerPath: "/usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => "/users",
      providesTags: ['Users']
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
