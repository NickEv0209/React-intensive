import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

import type { AlbumType } from "../model/types";

export const albumsApi = createApi({
  reducerPath: "/albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getAlbums: builder.query<AlbumType[], number>({
      query: (userId) => `/albums?userId=${userId}`,
    }),
  }),
});

export const { useGetAlbumsQuery } = albumsApi;
