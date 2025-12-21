import { useState, useEffect, useCallback } from "react";
import { UserCardUI } from "../ui/userCard/userCardUI";
import type { TUserCardUIProps } from "../ui/userCard/type";

type TUserCardProps = Omit<TUserCardUIProps, "isLiked">;

export const UserCard = ({ person, onLikeToggle }: TUserCardProps) => {
  // Заглушка для лайка (потом заменить на логику с localStorage)
  const dummy = Boolean(person.id);

  const [isButtonLiked, setIsButtonLiked] = useState(dummy);

  useEffect(() => {
    setIsButtonLiked(dummy);
  }, [dummy]);

  const handleLikeToggle = useCallback(() => {
    setIsButtonLiked(prev => !prev);
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

