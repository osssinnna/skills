import style from "./PersonCardUI.module.css";
import type { FC } from "react";
import type { TPersonCardUIProps, TSubcategoryWantToLearn } from "./type";
import { IconButton } from "../../IconButton/IconButton";
import { ButtonUI } from "../button/button";
import { TagSkillUI } from "../tag";

const MAX_VISIBLE_TAGS = 2;

export const PersonCardUI: FC<TPersonCardUIProps> = ({
    person,
    isLiked,
    onLikeToggle,
    onClickCardButton
}) => {
    const firstName = person.name.split(' ')[0];

    // Функция для рендеринга тегов "Хочет научиться"
    const renderWantToLearnTags = (subcategories: TSubcategoryWantToLearn[]) => {
        if (subcategories.length <= MAX_VISIBLE_TAGS) {
            return subcategories.map((item) => (
                <TagSkillUI color="#F7E7F2" key={item.id}>{item.name}</TagSkillUI>
            ));
        } else {
            const visibleTags = subcategories.slice(0, MAX_VISIBLE_TAGS);
            const count = subcategories.length - MAX_VISIBLE_TAGS;
            
            return (
                <>
                    {visibleTags.map((item) => (
                        <TagSkillUI color="#F7E7F2" key={item.id}>{item.name}</TagSkillUI>
                    ))}
                    <TagSkillUI color="#E8ECF7">+{count}</TagSkillUI>
                </>
            );
        }
    };

    return (
        <div className={style.card}>
            <div className={style.user}>
                <img 
                    className={style.image} 
                    src={person.avatarUrl} 
                    alt={person.name}
                />
                <div className={style.info}>
                    <div className = {style.icon}>
                        <IconButton 
                            isActive = {isLiked}
                            onClick = {onLikeToggle}
                        /> 
                    </div>
                    <div className={style.text}>
                        <h3>{firstName}</h3>
                        <p>{`${person.location}, ${person.age}`}</p>
                    </div>
                </div>
            </div>

                <div className={style.skills_container}>
                    <div className={style.skill_container}>
                        <h4>Может научить:</h4>
                        <div className={style.skill_list}>
                            <TagSkillUI color="#F7E7F2">
                                {person.skillCanTeach.name}
                            </TagSkillUI>
                        </div>
                    </div>
                    <div className={style.skill_container}>
                        <h4>Хочет научиться:</h4>
                        <div className={style.skill_list}>
                            {renderWantToLearnTags(person.subcategoriesWantToLearn)}
                        </div>
                    </div>
                </div>  
            <div>
                <ButtonUI 
                    color={"primary"}
                    fulsSize={true}
                    disabledToggle={false}
                    onClick={onClickCardButton}
                >
                    Подробнее
                </ButtonUI>
            </div>
        </div>
    )
}