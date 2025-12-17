import { useState, useEffect, useCallback } from "react";
import { PersonCardUI } from "../ui/personCard/personCardUI";
import type { TPersonCardUIProps } from "../ui/personCard/type";

type TPersonCardProps = Omit<TPersonCardUIProps, "isLiked">;

export const PersonCard = ({ person, onLikeToggle }: TPersonCardProps) => {
  // Тут должна быть логика проверки localStorage, которая возвращает есть ли лайк
  // пока пусть так
  const dummy = person.id ? true : false;

  const [isButtonLiked, setIsButtonLiked] = useState(dummy);

  useEffect(() => {
    setIsButtonLiked(dummy);
  }, [dummy]);

  const handleLikeToggle = useCallback(() => {
    setIsButtonLiked((prev) => !prev);
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
