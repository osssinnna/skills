import style from "./PersonCard.module.css";
import type { FC } from "react";
import type { TPersonCardUIProps } from "./type";
import { IconButton } from "../../IconButton/IconButton";


export const PersonCardUI: FC<TPersonCardUIProps> = ({
    person,
    isLiked,
    onLikeToggle,
}) => {
    const firstName = person.name.split(' ')[0];

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
                            {skill.teach.map((item, idx) => (
                                <span key={idx} className={style.tag}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className={style.skill_container}>
                        <h4>Хочет изучить:</h4>
                        <div className={style.skill_list}>
                            {skill.wantsToLearn.map((item, idx) => (
                                <span key={idx} className={style.tag}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            
            <div>ВСТАВИТЬ ПОТОМ КНОПКУ</div>
    </div>

    )
}