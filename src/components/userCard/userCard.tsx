import { useState, useEffect, useCallback } from "react";
import { UserCardUI } from "../ui/userCard/userCardUI";
import type { TUserCardUIProps } from "../ui/userCard/type";

type TUserCardProps = Omit<TUserCardUIProps, "isLiked">;

export const UserCard = ({ user, onLikeToggle }: TUserCardProps) => {
  // Тут должна быть логика проверки localStorage, которая возвращает есть ли лайк
  // пока пусть так
  const dummy = user.id ? true : false;

  const [isButtonLiked, setIsButtonLiked] = useState(false);

  // useEffect(() => {
  //   setIsButtonLiked(dummy);
  // }, [dummy]);

  const handleLikeToggle = useCallback(() => {
    setIsButtonLiked((prev) => !prev);
    onLikeToggle();
  }, [onLikeToggle]);

  return (
    <UserCardUI
      user={user}
      isLiked={isButtonLiked}
      onLikeToggle={handleLikeToggle}
    />
  );
};
