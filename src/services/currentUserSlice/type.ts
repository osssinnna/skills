export interface SkillCanTeach {
  name: string;
  description: string;
  categoryId: number | null;
  subcategoryId: number | null;
}

export type SubcategoryDTO = {
  id: number;
};

// данные пользователя
export type UserData = {
  name: string;
  location: string;
  birthDate: string | null; // Redux требует сериализуемые данные, Date не сериализуется
  gender: "Мужской" | "Женский" | null;
  avatarUrl: string;
  skillCanTeach: SkillCanTeach;
  images: string[];
  subcategoriesWantToLearn: SubcategoryDTO[];
};

// данные для регистрации
export type RegistrationData = {
  email: string;
  password: string;
  user: UserData;
};

//тип стейта
export type CurrentUserState = {
  isAuthChecked: boolean;
  data: RegistrationData | null;
  activeSection: null | "popular" | "new" | "recommend";
};