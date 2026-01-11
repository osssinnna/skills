import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Filters, UsersState } from "./type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../utils/api";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUsers();
      return data.users;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState: UsersState = {
  users: [],
  filters: {
    mode: "all",
    gender: null,
    city: null,
    subcategoryIds: [],
    categoryIds: [],
  },
  searchInput: "",
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Partial<Filters>>) {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { setFilters, resetFilters, setSearchInput } = usersSlice.actions;
export default usersSlice.reducer;
