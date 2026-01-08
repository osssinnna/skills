import type { RootState } from "../store";
import type { Message } from "./type";

export const selectMessagesState = (state: RootState) => state.messages;

export const selectAllMessages = (state: RootState): Message[] =>
  selectMessagesState(state).messages;

export const selectUnreadMessages = (state: RootState): Message[] =>
  selectMessagesState(state).messages.filter((msg) => !msg.viewed);

export const selectReadMessages = (state: RootState): Message[] =>
  selectMessagesState(state).messages.filter((msg) => msg.viewed);
