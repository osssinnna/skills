import { useState, useEffect, useCallback } from "react";
import { UserCardUI } from "../ui/userCard/userCardUI";
import type { TUserCardUIProps } from "../ui/userCard/type";

type TUserCardProps = Omit<TUserCardUIProps, "isLiked">;

export const UserCard = ({ person, onLikeToggle }: TUserCardProps) => {
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
    <UserCardUI
      person={person}
      isLiked={isButtonLiked}
      onLikeToggle={handleLikeToggle}
    />
  );
};
