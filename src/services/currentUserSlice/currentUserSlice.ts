import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RegistrationData, CurrentUserState } from "./type";

const initialState: CurrentUserState = {
  isAuthChecked: false,
  data: null
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
  },
})

export const { authChecked, registerUser, userLogout } = currentUserSlice.actions;
export default currentUserSlice.reducer;