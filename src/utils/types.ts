export type Category = {
  id: string;
  name: string;
};

export type Subcategory = {
  id: string;
  name: string;
  categoryId: string;
};

export type User = {
  id: string;
  avatarUrl: string;
  name: string;
  location: string;
  age: string;
  gender: "Мужской" | "Женский" | "Не указан";
  skillCanTeach: SkillCanTeach;
  images: string[];
  subcategoriesWantToLearn: Subcategory[];
  likesCount: number;
  likedByUserIds: string[];
  createdAt: string;
};

export type SkillCanTeach = {
  name: string;
  description: string;
  categoryId: string;
  subcategoryId: string;
};

export type RegistrationData = {
  email: string;
  password: string;
  user: UserData;
};

type UserData = {
  name: string;
  location: string;
  birthDate: Date | null;
  gender: "Мужской" | "Женский" | "Не указан";
  avatarUrl: string;
  skillCanTeach: SkillCanTeach;
  images: string[];
  subcategoriesWantToLearn: SubcategoryDTO[];
};

export type SubcategoryDTO = {
  id: string;
};
