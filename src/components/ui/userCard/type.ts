export type TSubcategoryWantToLearn = {
  id: number;
  name: string;
};

export type TSubcategoriesWantToLearn = TSubcategoryWantToLearn[];

export type TSkillCanTeach = {
  id: number;
  name: string;
  description: string;
};

export type TUser = {
  id: number;
  avatarUrl: string;
  name: string;
  location: string;
  age: string;
  gender: string;
  skillCanTeach: TSkillCanTeach;
  images: string[];
  subcategoriesWantToLearn: TSubcategoriesWantToLearn;
};

export type TUserCardUIProps = {
  person: TUser;
  isLiked: boolean;
  onLikeToggle: () => void;
};
