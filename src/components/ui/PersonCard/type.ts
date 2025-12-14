type TSkillsPerson = {
    teach: string[];
    wantsToLearn: string[];
};

export type TPerson = {
    id: string;
    img: string;
    name: string;
    city: string;
    age: string;
    skills: TSkillsPerson[];
};

export type TPersonCardUIProps = {
    person: TPerson;
    isLiked: boolean;
    onLikeToggle: () => void;
    onClickCardButton: () => void; // добавила это, чтобы как-то на кнопку ПОДРОБНЕЕ нажимать (?)
};