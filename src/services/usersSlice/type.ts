import type { User } from "../../utils/types";

export type FiltersMode = "all" | "wantToLearn" | "canTeach";

export type Filters = {
  mode: "all" | "wantToLearn" | "canTeach";
  gender: "Мужской" | "Женский" | null;
  city: string | null;
  subcategoryIds: number[];
  categoryIds: number[];
};

export type UsersState = {
  users: User[];
  filters: Filters;
  searchInput: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: unknown | null;
};
