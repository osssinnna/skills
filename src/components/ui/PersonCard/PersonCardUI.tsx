import style from "./PersonCardUI.module.css";
import type { FC } from "react";
import type { TPersonCardUIProps } from "./type";
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

    // Функция для рендеринга полных тегов <= 2 штуки
    const renderTags = (tags: string[]) => {
        if (tags.length <= MAX_VISIBLE_TAGS) {
            return tags.map((item, idx) => (
                <TagSkillUI color="#F7E7F2" key={idx}>{item}</TagSkillUI>
            ));
        } else {
            const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS);
            const count = tags.length - MAX_VISIBLE_TAGS;
            
            return (
                <>
                    {visibleTags.map((item, idx) => (
                        <TagSkillUI color="#F7E7F2" key={idx}>{item}</TagSkillUI>
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
                    src={person.img} 
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
                        <p>{`${person.city}, ${person.age}`}</p>
                    </div>
                </div>
            </div>

            {person.skills.map((skill, index) => (
                <div key={index} className={style.skills_container}>
                    <div className={style.skill_container}>
                        <h4>Может научить:</h4>
                        <div className={style.skill_list}>
                            {renderTags(skill.teach)}
                        </div>
                    </div>
                    <div className={style.skill_container}>
                        <h4>Хочет научиться:</h4>
                        <div className={style.skill_list}>
                            {renderTags(skill.wantsToLearn)}
                        </div>
                    </div>
                </div>
            ))}
            
            <div>
                <ButtonUI 
                    color={"primary"}
                    fulsSize={true}
                    disabledToggle={false}
                    // добавила это, чтобы как-то на кнопку ПОДРОБНЕЕ нажимать (?)
                    onClick={onClickCardButton}
                >
                    Подробнее
                </ButtonUI>
            </div>
        </div>
    )
}