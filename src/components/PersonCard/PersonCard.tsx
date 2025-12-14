import { useState, useEffect, useCallback } from "react";

import { PersonCardUI } from "../ui/PersonCard/PersonCard";
import type { TPersonCardUIProps } from '../ui/PersonCard/type';

export const PersonCard = ({
    person,
    isLiked,
    onLikeToggle,
}: TPersonCardUIProps) => {

    const [isButtonLiked, setIsButtonLiked] = useState(isLiked);

    useEffect(() => {
        setIsButtonLiked(isLiked);
    }, [isLiked]);

    const handleLikeToggle = useCallback(() => {
        setIsButtonLiked(prev => !prev);
        onLikeToggle();
    }, [onLikeToggle]); 

    return (
        <PersonCardUI
            person={person}
            isLiked={isButtonLiked}
            onLikeToggle={handleLikeToggle}
        />
    );
};