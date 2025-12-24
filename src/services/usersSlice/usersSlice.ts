import { createSlice, createSelector } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../utils/types";
import type { RootState } from "../store";

type FiltersMode = "all" | "wantToLearn" | "canTeach";

type Filters = {
  mode: FiltersMode;
  gender: "Мужской" | "Женский" | null;
  city: string | null;
  skillIds: number[];
};

type UsersState = {
  users: User[];
  filters: Filters;
};

const initialState: UsersState = {
  users: [],
  filters: {
    mode: "all",
    gender: null,
    city: null,
    skillIds: [],
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    setFilters(state, action: PayloadAction<Partial<Filters>>) {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
  },
});

export const { setUsers, setFilters, resetFilters } = usersSlice.actions;
export default usersSlice.reducer;

const selectUsers = (state: RootState) => state.users.users;
const selectFilters = (state: RootState) => state.users.filters;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilters],
  (users, filters) => {
    return users.filter((user) => {
      if (filters.gender && user.gender !== filters.gender) return false;
      if (filters.city && user.location !== filters.city) return false;

      if (filters.mode === "wantToLearn" && filters.skillIds.length) {
        return user.subcategoriesWantToLearn.some((sub) =>
          filters.skillIds.includes(sub.id)
        );
      }

      if (filters.mode === "canTeach" && filters.skillIds.length) {
        return filters.skillIds.includes(user.skillCanTeach.id);
      }

      return true;
    });
  }
);
