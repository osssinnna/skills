import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { selectSubcategoryIdsBySelectedCategories } from "../categoriesSlice/selectors";
import type { User } from "../../utils/types";

export const selectUsers = (state: RootState) => state.users.users;
export const selectFilters = (state: RootState) => state.users.filters;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilters, selectSubcategoryIdsBySelectedCategories],
  (users, filters, categorySubIds) => {
    if (!users || !Array.isArray(users)) return [];

    const activeSubIds =
      filters.subcategoryIds.length > 0
        ? filters.subcategoryIds
        : categorySubIds;

    return users.filter((user) => {
      if (filters.gender && user.gender !== filters.gender) return false;
      if (filters.city && user.location !== filters.city) return false;

      if (activeSubIds.length > 0) {
        const hasWant = user.subcategoriesWantToLearn.some((sub) =>
          activeSubIds.includes(sub.id)
        );

        const hasTeach = activeSubIds.includes(
          user.skillCanTeach.subcategoryId
        );

        if (filters.mode === "wantToLearn") return hasWant;
        if (filters.mode === "canTeach") return hasTeach;

        return hasWant || hasTeach;
      }

      return true;
    });
  }
);

export const selectHasActiveFilters = createSelector(
  [selectFilters],
  (filters) =>
    filters.mode !== "all" ||
    filters.gender !== null ||
    filters.city !== null ||
    filters.subcategoryIds.length > 0 ||
    filters.categoryIds.length > 0
);

export const selectPopularUsers = createSelector(
  [selectFilteredUsers],
  (users) => (users || []).slice(0, 10)
);

export const selectNewUsers = createSelector([selectFilteredUsers], (users) =>
  [...(users || [])].reverse().slice(0, 10)
);

export const selectUserById = createSelector(
  [selectUsers, (_, userId) => userId],
  (users, userId) => users.find((user) => user.id === userId)
);

export const selectUsersByNameOrSkill = createSelector(
  [selectFilteredUsers, (_, search: string) => search],
  (users, search): User[] => {
    if (!search.trim()) {
      return users; // если строка поиска пустая, возвращаем всех
    }

    const lowerSearch = search.toLowerCase();

    return users.filter((user) => {
      // Поиск по имени и фамилии
      const matchesName = user.name.toLowerCase().includes(lowerSearch);

      // Поиск по скиллам
      const matchesWant = user.subcategoriesWantToLearn.some((sub) =>
        sub.name.toLowerCase().includes(lowerSearch)
      );

      const matchesTeach = user.skillCanTeach.name
        .toLowerCase()
        .includes(lowerSearch);

      return matchesName || matchesWant || matchesTeach;
    });
  }
);
