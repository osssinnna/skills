import type { Category, Subcategory } from "../../utils/types";

export type CategoriesState = {
  categories: Category[];
  subcategories: Subcategory[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: unknown | null;
};

export type CategoryWithSubCategories = Category & {
  subcategories: Subcategory[];
};
