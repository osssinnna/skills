import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { selectSubcategoryIdsBySelectedCategories } from "../categoriesSlice/selectors";

export const selectUsers = (state: RootState) => state.users.users;
export const selectFilters = (state: RootState) => state.users.filters;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilters, selectSubcategoryIdsBySelectedCategories],
  (users, filters, categorySubIds) => {
    const activeSubIds =
      filters.subcategoryIds.length > 0
        ? filters.subcategoryIds
        : categorySubIds;

    return users.filter((user) => {
      if (filters.gender && user.gender !== filters.gender) return false;
      if (filters.city && user.location !== filters.city) return false;

      if (filters.mode === "wantToLearn" && activeSubIds.length) {
        return user.subcategoriesWantToLearn.some((sub) =>
          activeSubIds.includes(sub.id)
        );
      }

      if (filters.mode === "canTeach" && activeSubIds.length) {
        return activeSubIds.includes(user.skillCanTeach.subcategoryId);
      }

      return true;
    });
  }
);

export const selectPopularUsers = createSelector(
  [selectFilteredUsers],
  (users) => users.slice(0, 10)
);

export const selectNewUsers = createSelector([selectFilteredUsers], (users) =>
  [...users].reverse().slice(0, 10)
);
