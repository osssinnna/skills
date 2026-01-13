import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { UserCardExpandedUI } from "../ui/userCardExpanded/userCardExpandedUI";
import type { TUserCardExpandedUIProps } from "../ui/userCardExpanded/types";

import { usePersonLike } from "../../hooks/usePersonLike";
import { selectCurrentUser } from "../../services/currentUserSlice/selectors";

type TUserCardExpandedProps = Omit<TUserCardExpandedUIProps, "isLiked">;

export const UserCardExpanded = ({
  user,
  onLikeToggle,
}: TUserCardExpandedProps) => {
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

  return (
    <UserCardExpandedUI
      user={user}
      isLiked={isLiked}
      onLikeToggle={handleLikeToggle}
    />
  );
};
