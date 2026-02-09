export interface Message {
  userName: string;
  userId: number;
  date: string;
  viewed: boolean;
  typeMessage: "confirmed" | "offered" | "rejected";
  message: {
    title: string;
    comment: string;
  };
}

export interface MessagesState {
  messages: Message[];
}
