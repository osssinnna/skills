export type Category = {
  id: number;
  name: string;
};

export type Subcategory = {
  id: number;
  name: string;
  categoryId: number;
};

export type User = {
  id: number;
  avatarUrl: string;
  name: string;
  location: string;
  age: string;
  gender: "Мужской" | "Женский" | null;
  skillCanTeach: SkillCanTeach;
  images: string[];
  subcategoriesWantToLearn: Subcategory[];
  categoriesWantToLearn: Category[];
  likesCount: number;
  likedByUserIds: number[];
  createdAt: string;
};

export type SkillCanTeach = {
  name: string;
  description: string;
  categoryId: number;
  subcategoryId: number;
};

export type RegistrationData = {
  email: string;
  password: string;
  user: UserData;
};

type UserData = {
  name: string;
  location: string;
  birthDate: string | null;
  gender: "Мужской" | "Женский" | null;
  avatarUrl: string;
  skillCanTeach: {
    name: string;
    description: string;
    categoryId: number | null;
    subcategoryId: number | null;
  };
  images: string[];
  subcategoriesWantToLearn: SubcategoryDTO[];
};

export type SubcategoryDTO = {
  id: number;
};

// уведомления

export type TMessageExhanges = "confirmed" | "offered" | "rejected";

export type TMessageNotifying = {
  userName: string;
  userId: number; //- для перехода на карточку пользователя и отмечания соо как прочитаннок
  date: string; // - дата создания сообщения
  viewed: boolean; //  - просмотрено ли сообщение
  typeMessage: TMessageExhanges;
};
