import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { usersApi } from "../api/usersApi";

import type { UserType } from "./types";

const userAdapter = createEntityAdapter<UserType>();
const initialState = userAdapter.getInitialState();

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        userAdapter.setAll(state, action.payload);
      },
    );
  },
});

export const userReducer = userSlice.reducer;
