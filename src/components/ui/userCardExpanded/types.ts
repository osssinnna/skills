export type TSubcategoryWantToLearn = {
  id: number;
  name: string;
};

export type TSkillCanTeach = {
  id: number;
  name: string;
  description: string;
  category?: string;
};

export type TUser = {
  id: number;
  avatarUrl: string;
  name: string;
  location: string;
  age: string;
  gender: string;
  description: string;
  skillCanTeach: TSkillCanTeach;
  images: string[];
  subcategoriesWantToLearn: TSubcategoryWantToLearn[];

};

export type TUserCardExpandedUIProps = {
  user: TUser;
  isLiked: boolean;
  onLikeToggle?: () => void;  
};
