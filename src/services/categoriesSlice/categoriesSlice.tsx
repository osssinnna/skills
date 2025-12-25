import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Category, Subcategory } from "../../utils/types";
import type { CategoriesState } from "./type";

const initialState: CategoriesState = {
  categories: [],
  subcategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
    setSubcategories(state, action: PayloadAction<Subcategory[]>) {
      state.subcategories = action.payload;
    },
    resetCategories(state) {
      state.categories = [];
      state.subcategories = [];
    },
  },
});

export const { setCategories, setSubcategories, resetCategories } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
