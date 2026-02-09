import type { TUser } from "../../ui/userCardExpanded/types";

export const mockUser1: TUser = {
  id: 1,
  avatarUrl:
    "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=200",
  name: "Алексей Петров",
  location: "Санкт-Петербург",
  age: "34 года",
  gender: "Мужской",
  description: "Привет! Люблю ритм, кофе по утрам и людей, которые не боятся пробовать новое",
  skillCanTeach: {
    id: 101,
    name: "Фотография",
    description: "Основы съемки, работа с камерой и обработка фото.",
    category: "Творчество и искусство / Музыка и звук",
  },
  images: [
    "https://picsum.photos/seed/101/400/300",
    "https://picsum.photos/seed/102/400/300",
  ],
  subcategoriesWantToLearn: [
    { id: 201, name: "Рисование" },
    { id: 202, name: "Музыка" },
    { id: 204, name: "Программирование" },
  ],
};

export const mockUser2: TUser = {
  id: 2,
  avatarUrl:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Artist_painting_watercolor_%28Unsplash%29.jpg?width=200",
  name: "Марина Соколова",
  location: "Санкт-Петербург",
  age: "32 года",
  gender: "Женский",
  description: "Люблю создавать красивые интерфейсы и делиться знаниями с другими",
  skillCanTeach: {
    id: 102,
    name: "Веб-дизайн",
    description: "Создание макетов сайтов, UI/UX дизайн и прототипирование.",
    category: "Творчество и искусство / Графический дизайн",
  },
  images: [
    "https://picsum.photos/seed/103/400/300",
    "https://picsum.photos/seed/104/400/300",
  ],
  subcategoriesWantToLearn: [
    { id: 203, name: "Фотография" },
    { id: 204, name: "Программирование" },
  ],
};
