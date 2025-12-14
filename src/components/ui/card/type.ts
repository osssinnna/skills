type TSkillsPerson = {
    teach: string[];
    wantsToLearn: string[];
};

type TPerson = {
    id: string;
    img: string;
    name: string;
    city: string;
    age: string;
    skills: TSkillsPerson[];
};

export type TPersonCardUIProps = {
    person: TPerson;
    isLiked: string;
    onLikeToggle: () => void;
    className?: string; // наверное стили нам тоже нужны?
};