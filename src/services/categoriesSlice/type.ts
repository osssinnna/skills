import type { Category, Subcategory } from "../../utils/types";

export type CategoriesState = {
  categories: Category[];
  subcategories: Subcategory[];
};

export type CategoryWithSubCategories = Category & {
  subcategories: Subcategory[];
};
