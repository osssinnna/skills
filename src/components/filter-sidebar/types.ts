import type { Category, Subcategory } from "../../utils/types";

export type FilterMode = "all" | "wantToLearn" | "canTeach";

export type Filters = {
  mode: FilterMode;
  gender: "Мужской" | "Женский" | null;
  city: string | null;
  skillIds: string[];
};

export type FilterSidebarProps = {
  filters: Filters;
  onChange: (filters: Filters) => void;
  categoriesTree: (Category & { subcategories: Subcategory[] })[];
  cities: string[];
};
