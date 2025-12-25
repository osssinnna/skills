import { createSlice } from "@reduxjs/toolkit";
import type { CategoriesState } from "./type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../utils/api";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCategories();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState: CategoriesState = {
  categories: [],
  subcategories: [],
  status: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    resetCategories(state) {
      state.categories = [];
      state.subcategories = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload.categories;
        state.subcategories = action.payload.subcategories;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error;
      });
  },
});

export const { resetCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
