import type { User } from "../../../utils/types";

export const mockPerson1: User = {
  id: 1,
  avatarUrl: "https://picsum.photos/id/1001/200/200",
  name: "Максим Соколова",
  location: "Санкт-Петербург",
  age: "32",
  gender: "Мужской",
  skillCanTeach: {
    id: 1,
    name: "Рисование и иллюстрация",
    description: "Помогаю прокачать навык «Рисование и иллюстрация»",
    subcategoryId: 9,
  },
  images: [
    "https://picsum.photos/id/1001/600/400",
    "https://picsum.photos/id/1051/600/400",
  ],
  subcategoriesWantToLearn: [
    {
      id: 6,
      name: "Тайм-менеджмент",
      categoryId: 1,
    },
    {
      id: 1,
      name: "Управление командой",
      categoryId: 1,
    },
  ],
  categoriesWantToLearn: [
    {
      id: 1,
      name: "Бизнес и карьера",
    },
  ],
  likesCount: 71,
  likedByUserIds: [21, 20, 35, 19, 40, 45],
  createdAt: "2024-10-25T00:00:00Z",
};

export const mockPerson2: User = {
  id: 2,
  avatarUrl: "https://picsum.photos/id/1002/200/200",
  name: "Иван Соколова",
  location: "Москва",
  age: "28",
  gender: "Мужской",
  skillCanTeach: {
    id: 2,
    name: "Питание и ЗОЖ",
    description: "Помогаю прокачать навык «Питание и ЗОЖ»",
    subcategoryId: 38,
  },
  images: [
    "https://picsum.photos/id/1002/600/400",
    "https://picsum.photos/id/1052/600/400",
  ],
  subcategoriesWantToLearn: [
    {
      id: 6,
      name: "Тайм-менеджмент",
      categoryId: 1,
    },
  ],
  categoriesWantToLearn: [
    {
      id: 1,
      name: "Бизнес и карьера",
    },
  ],
  likesCount: 58,
  likedByUserIds: [1, 17, 3],
  createdAt: "2024-12-06T00:00:00Z",
};
