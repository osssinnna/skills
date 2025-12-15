import { useState, useEffect, useCallback } from "react";
import { PersonCardUI } from "../ui/PersonCard/PersonCardUI";
import type { TPersonCardUIProps } from '../ui/PersonCard/type';

type TPersonCardProps = Omit<TPersonCardUIProps, 'isLiked'>;

export const PersonCard = ({
    person,
    onLikeToggle,
    onClickCardButton
}: TPersonCardProps) => {

    // Тут должна быть логика проверки localStorage, которая возвращает есть ли лайк
    // пока пусть так
    const dummy = person.id? true : false;

    const [isButtonLiked, setIsButtonLiked] = useState(dummy);

    useEffect(() => {
        setIsButtonLiked(dummy);
    }, [dummy]);

    const handleLikeToggle = useCallback(() => {
        setIsButtonLiked(prev => !prev);
        onLikeToggle();
    }, [onLikeToggle]); 

    return (
        <PersonCardUI
            person={person}
            isLiked={isButtonLiked}
            onLikeToggle={handleLikeToggle}
            onClickCardButton={onClickCardButton}
        />
    );
};