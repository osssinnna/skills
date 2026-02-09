import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { UserCardUI } from "../ui/userCard/userCardUI";
import type { TUserCardUIProps } from "../ui/userCard/type";

import { usePersonLike } from "../../hooks/usePersonLike";
import { selectCurrentUser } from "../../services/currentUserSlice/selectors";
import { useExchangeUsers } from "../../hooks/useExchangeUsers";

type TUserCardProps = Omit<
  TUserCardUIProps,
  "isLiked" | "onOpenDetails" | "hasExchange"
>;

export const UserCard = ({ user, onLikeToggle }: TUserCardProps) => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const { isLiked, toggleLike } = usePersonLike(user.id, onLikeToggle);

  const handleLikeToggle = useCallback(() => {
    if (currentUser === null) {
      navigate("/register");
      return;
    }
    toggleLike();
  }, [currentUser, navigate, toggleLike]);

  const { hasExchange } = useExchangeUsers();

  const handleOpenDetails = useCallback(() => {
    navigate(`/skill/${user.id}`);
  }, [navigate, user.id]);

  const visibleIsLiked = currentUser === null ? false : isLiked;

  return (
    <UserCardUI
      user={user}
      isLiked={visibleIsLiked}
      hasExchange={hasExchange(user.id)}
      onLikeToggle={handleLikeToggle}
      onOpenDetails={handleOpenDetails}
    />
  );
};
