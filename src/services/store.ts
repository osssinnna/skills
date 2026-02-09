import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";

import UsersReduсer from "./usersSlice/usersSlice";
import categoriesReduсer from "./categoriesSlice/categoriesSlice";
import currentUserReduсer from "./currentUserSlice/currentUserSlice";
import messagesReducer from "./messagesSlice/messagesSlice";

export const rootReducer = combineReducers({
  users: UsersReduсer,
  categories: categoriesReduсer,
  currentUser: currentUserReduсer,
  messages: messagesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
