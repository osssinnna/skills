import type { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";
import { calculateAge } from '../../utils/calc-data';

// все данные текущего пользователя
export const selectCurrentUser = (state: RootState) => state.currentUser.data;

// профиль пользователя
export const selectUserProfile = (state: RootState) => state.currentUser.data?.user;

// проверена ли авторизация
export const selectIsAuthChecked = (state: RootState) => state.currentUser.isAuthChecked;

// авторизован ли пользователь
export const selectIsAuthenticated = (state: RootState) => !!state.currentUser.data;

// email пользователя или undefined
export const selectUserEmail = (state: RootState) => state.currentUser.data?.email;

// имя пользователя
export const selectUserName = createSelector(
  [selectUserProfile],
  (profile) => profile?.name || null
);

// пол пользователя
export const selectUserGender = createSelector(
  [selectUserProfile],
  (profile) => profile?.gender || null
);

// возраст пользователя
export const selectUserAge = createSelector(
  [selectUserProfile],
  (profile) => calculateAge(profile?.birthDate || null)
);

// город пользователя
export const selectUserLocation = createSelector(
  [selectUserProfile],
  (profile) => profile?.location || null
);

// аватар пользователя
export const selectUserAvatar = createSelector(
  [selectUserProfile],
  (profile) => profile?.avatarUrl || null
);

// все фотографии пользователя 
export const selectUserImages = createSelector(
  [selectUserProfile],
  (profile) => profile?.images || []
);

// навыки, которым может научить
export const selectUserSkillsToTeach = createSelector(
  [selectUserProfile],
  (profile) => profile?.skillCanTeach || []
);

// подкатегории, которым хочет научиться
export const selectUserSubcategoriesToLearn = createSelector(
  [selectUserProfile],
  (profile) => profile?.subcategoriesWantToLearn || []
);