import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RegistrationData, CurrentUserState } from "./type";

const initialState: CurrentUserState = {
  isAuthChecked: false,
  data: null,
  activeSection: null
}


const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    // отмечает, что проверка авторизации выполнена
    authChecked(state) {
      state.isAuthChecked = true;
    },

    // сохраняет данные пользователя при регистрации
    registerUser(state, action: PayloadAction<RegistrationData>){
      state.data = action.payload
    },

    // очищает данные пользователя при выходе
    userLogout(state) {
      state.data = null;
    },

    // обновление данных пользователя из его профиля
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
            ...action.payload.user
          };
        }
      }
    },
    // устанавливает активную секцию на главной странице
    setActiveSection(state, action: PayloadAction<null | "popular" | "new" | "recommend">) {
      state.activeSection = action.payload;
    },
  },
})
export const { authChecked, registerUser, userLogout, updateUserProfile, setActiveSection } = currentUserSlice.actions;
export default currentUserSlice.reducer;