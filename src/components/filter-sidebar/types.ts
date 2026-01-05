import type { Category, Subcategory } from "../../utils/types";

export type FilterMode = "all" | "wantToLearn" | "canTeach";

export type Filters = {
  mode: FilterMode;
  gender: "Мужской" | "Женский" | null;
  city: string | null;
  subcategoryIds: number[];
  categoryIds: number[];
};

export type FilterSidebarProps = {
  filters: Filters;
  categoriesTree: (Category & { subcategories: Subcategory[] })[];
  cities: string[];
};
