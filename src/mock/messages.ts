import type { Message } from "../services/messagesSlice/type";

export const mockMessages: Message[] = [
  {
    userName: "Иван Иванов",
    userId: 1,
    date: "2026-01-08T10:00:00Z",
    viewed: false,
    typeMessage: "confirmed",
    message: {
      title: "принял ваш обмен",
      comment: "Перейдите в профиль, чтобы обсудить детали",
    },
  },
  {
    userName: "Мария Петрова",
    userId: 2,
    date: "2026-01-07T18:30:00Z",
    viewed: true,
    typeMessage: "offered",
    message: {
      title: "предлагает вам обмен",
      comment: "Примите обмен, чтобы обсудить детали",
    },
  },
  {
    userName: "Алексей Смирнов",
    userId: 3,
    date: "2026-01-06T14:15:00Z",
    viewed: false,
    typeMessage: "rejected",
    message: {
      title: "отклонил ваш обмен",
      comment: "Перейдите в профиль, чтобы посмотреть подробности",
    },
  },
];
