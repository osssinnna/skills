import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RegistrationData, CurrentUserState } from "./type";

const STORAGE_KEY = "currentUser";

const getUserFromStorage = (): RegistrationData | null => {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as RegistrationData;
    return parsed;
  } catch {
    return null;
  }
};

const saveUserToStorage = (data: RegistrationData | null): void => {
  if (typeof window === "undefined") return;

  if (data === null) {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
};

const initialState: CurrentUserState = {
  isAuthChecked: false,
  data: getUserFromStorage() ? null : getUserFromStorage(),
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    authChecked(state) {
      state.isAuthChecked = true;
    },

    registerUser(state, action: PayloadAction<RegistrationData>) {
      state.data = action.payload;
      saveUserToStorage(action.payload);
    },

    userLogout(state) {
      state.data = null;
      saveUserToStorage(null);
    },

    updateUserProfile(state, action: PayloadAction<Partial<RegistrationData>>) {
      if (state.data) {
        if (action.payload.email !== undefined) {
          state.data.email = action.payload.email;
        }

        if (action.payload.password !== undefined) {
          state.data.password = action.payload.password;
        }

        if (action.payload.user && state.data.user) {
          state.data.user = {
            ...state.data.user,
            ...action.payload.user,
          };
        }
        saveUserToStorage(state.data);
      }
    },

    loadUserFromStorage(state) {
      state.data = getUserFromStorage();
    },
  },
});

export const {
  authChecked,
  registerUser,
  userLogout,
  updateUserProfile,
  loadUserFromStorage,
} = currentUserSlice.actions;

export default currentUserSlice.reducer;
