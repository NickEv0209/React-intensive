import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import type { PostType } from "./types";

import { postsApi } from "../api/postsApi";

const postsAdapter = createEntityAdapter<PostType>();
const initialState = postsAdapter.getInitialState();

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getPostsByUserId.matchFulfilled,
      (state, action) => {
        postsAdapter.setAll(state, action.payload);
      },
    );
  },
});

export const postReducer = postSlice.reducer;
