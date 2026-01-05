import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../usersSlice/selectors";
import { selectSubcategories } from "../categoriesSlice/selectors";
import type { ActiveFilterTag } from "./type";

export const selectActiveFilterTags = createSelector(
  [selectFilters, selectSubcategories],
  (filters, subcategories): ActiveFilterTag[] => {
    const tags: ActiveFilterTag[] = [];

    if (filters.mode !== "all") {
      tags.push({
        type: "mode",
        label: filters.mode === "wantToLearn" ? "Хочу научиться" : "Могу научить",
      });
    }

    if (filters.gender) {
      tags.push({
        type: "gender",
        label: filters.gender,
      });
    }

    if (filters.city) {
      tags.push({
        type: "city",
        label: filters.city,
      });
    }

    filters.subcategoryIds.forEach((id) => {
      const sub = subcategories.find((s) => s.id === id);
      if (sub) {
        tags.push({
          type: "subcategory",
          id,
          label: sub.name,
        });
      }
    });

    return tags;
  }
);
