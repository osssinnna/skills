import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../utils/types";
import type { Filters, UsersState } from "./type";

const initialState: UsersState = {
  users: [],
  filters: {
    mode: "all",
    gender: null,
    city: null,
    subcategoryIds: [],
    categoryIds: [],
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    setFilters(state, action: PayloadAction<Partial<Filters>>) {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
  },
});

export const { setUsers, setFilters, resetFilters } = usersSlice.actions;
export default usersSlice.reducer;
