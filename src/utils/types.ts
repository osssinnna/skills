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
  gender: "Мужской" | "Женский" | "Не указан";
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
  id: number;
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
  birthDate: string;
  gender: "Мужской" | "Женский" | "Не указан";
  avatarUrl: string;
  skillCanTeach: SkillCanTeach;
  images: string[];
  subcategoriesWantToLearn: SubcategoryDTO[];
};

export type SubcategoryDTO = {
  id: number;
};
