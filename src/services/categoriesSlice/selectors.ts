import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { CategoryWithSubCategories } from "./type";

export const selectSubcategories = (state: RootState) => state.categories.subcategories;

export const selectCategories = (state: RootState) => state.categories.categories;

export const selectCategoryIds = (state: RootState) => state.users.filters.categoryIds;

export const selectCategoriesStatus = (state: RootState) => state.categories.status;

export const selectCategoriesError = (state: RootState) => state.categories.error;

export const selectSubcategoryIdsBySelectedCategories = createSelector(
  [selectSubcategories, selectCategoryIds],
  (subcategories, categoryIds) => {
    if (!categoryIds.length) return [];

    return subcategories
      .filter((sub) => categoryIds.includes(sub.categoryId))
      .map((sub) => sub.id);
  }
);

export const selectCategoriesWithSubCategories = createSelector(
  [selectSubcategories, selectCategories],
  (subcategories, categories): CategoryWithSubCategories[] =>
    categories.map((category) => ({
      ...category,
      subcategories: subcategories.filter((sub) => sub.categoryId === category.id),
    }))
);
