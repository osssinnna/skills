export interface Message {
  userName: string;
  userId: number;
  date: string;
  viewed: boolean;
}

export interface MessagesState {
  messages: Message[];
}
