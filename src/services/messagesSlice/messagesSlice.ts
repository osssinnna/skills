import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { MessagesState, Message } from "./type";
import { mockMessages } from "../../mock/messages";

const initialState: MessagesState = {
  messages: mockMessages, //  моковые данные
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    // Заменяем все сообщения новым массивом
    setMessages(state, action: PayloadAction<Message[]>) {
      state.messages = action.payload;
    },

    // Добавляем одно новое сообщение в массив
    pushMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },

    // Отмечаем одно сообщение как просмотренное
    markAsViewed(state, action: PayloadAction<number>) {
      const message = state.messages.find(
        (msg) => msg.userId === action.payload
      );
      if (message) {
        message.viewed = true;
      }
    },

    // Отмечаем все сообщения как просмотренные, должно быть удобно, есть кнопка
    markAllAsViewed(state) {
      state.messages.forEach((msg) => {
        msg.viewed = true;
      });
    },
  },
});

export const { setMessages, pushMessage, markAsViewed, markAllAsViewed } =
  messagesSlice.actions;

export default messagesSlice.reducer;
