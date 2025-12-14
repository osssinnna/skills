import { useState, useEffect, useCallback } from "react";
import { PersonCardUI } from "../ui/PersonCard/PersonCardUI";
import type { TPersonCardUIProps } from '../ui/PersonCard/type';

type TPersonCardProps = Omit<TPersonCardUIProps, 'isLiked'> & {
    isLiked?: string; // id пользователя для проверки в localStorage
};

export const PersonCard = ({
    person,
    isLiked,
    onLikeToggle,
    onClickCardButton
}: TPersonCardProps) => {

    //заглушка для isLiked (?)
    const dummy = isLiked? true : false;

    const [isButtonLiked, setIsButtonLiked] = useState(dummy);

    useEffect(() => {
        // Логика проверки localStorage будет здесь
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