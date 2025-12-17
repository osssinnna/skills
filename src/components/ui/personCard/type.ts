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

export type TPerson = {
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

export type TPersonCardUIProps = {
    person: TPerson;
    isLiked: boolean;
    onLikeToggle: () => void;
};