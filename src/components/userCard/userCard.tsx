import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { UserCardUI } from "../ui/userCard/userCardUI";
import type { TUserCardUIProps } from "../ui/userCard/type";

import { usePersonLike } from "../../hooks/usePersonLike";
import { selectCurrentUser } from "../../services/currentUserSlice/selectors"; // или selectIsAuthenticated

type TUserCardProps = Omit<TUserCardUIProps, "isLiked">;

export const UserCard = ({ user, onLikeToggle }: TUserCardProps) => {
  const navigate = useNavigate();

  // По ТЗ: если data === null → редирект на регистрацию
  const data = useSelector(selectCurrentUser); // data | null

  const { isLiked, toggleLike } = usePersonLike(user.id, () => onLikeToggle());

  const handleLikeToggle = useCallback(() => {
    if (data === null) {
      navigate("/register"); // роут существует :contentReference[oaicite:3]{index=3}
      return;
    }

    toggleLike();
  }, [data, navigate, toggleLike]);

  return (
    <UserCardUI user={user} isLiked={isLiked} onLikeToggle={handleLikeToggle} />
  );
};
