import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";

import UsersReduser from "./usersSlice/usersSlice";

export const rootReducer = combineReducers({
  users: UsersReduser,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
