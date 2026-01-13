import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { UserCardUI } from "../ui/userCard/userCardUI";
import type { TUserCardUIProps } from "../ui/userCard/type";

import { usePersonLike } from "../../hooks/usePersonLike";
import { selectCurrentUser } from "../../services/currentUserSlice/selectors";

type TUserCardProps = Omit<TUserCardUIProps, "isLiked" | "onOpenDetails">;

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

  const handleOpenDetails = useCallback(() => {
    navigate(`/userExpanded/${user.id}`);
  }, [navigate, user.id]);

  const visibleIsLiked = currentUser === null ? false : isLiked;

  return (
    <UserCardUI
      user={user}
      isLiked={visibleIsLiked}
      onLikeToggle={handleLikeToggle}
      onOpenDetails={handleOpenDetails}
    />
  );
};
