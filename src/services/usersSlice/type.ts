import type { User } from "../../utils/types";

export type FiltersMode = "all" | "wantToLearn" | "canTeach";

export type Filters = {
  mode: FiltersMode;
  gender: "Мужской" | "Женский" | null;
  city: string | null;
  subcategoryIds: number[];
  categoryIds: number[];
};

export type UsersState = {
  users: User[];
  filters: Filters;
};
