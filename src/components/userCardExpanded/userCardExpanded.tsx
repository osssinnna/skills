import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { UserCardExpandedUI } from "../ui/userCardExpanded/userCardExpandedUI";
import type { TUserCardExpandedUIProps } from "../ui/userCardExpanded/types";

import { usePersonLike } from "../../hooks/usePersonLike";
import { selectCurrentUser } from "../../services/currentUserSlice/selectors";
import { useExchangeUsers } from "../../hooks/useExchangeUsers";

type TUserCardExpandedProps = Omit<
  TUserCardExpandedUIProps,
  "isLiked" | "onExchangeClick" | "isExcahnged"
>;

export const UserCardExpanded = ({
  user,
  onLikeToggle,
}: TUserCardExpandedProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);

  const { isLiked, toggleLike } = usePersonLike(user.id, onLikeToggle);

  const handleLikeToggle = useCallback(() => {
    if (currentUser === null) {
      navigate("/register", { state: { from: location } });
      return;
    }
    toggleLike();
  }, [currentUser, navigate, location, toggleLike]);

  const { hasExchange, toggleExchange } = useExchangeUsers();

  const handleExchangeClick = useCallback(() => {
    if (currentUser === null) {
      // Перенаправление на регистрацию с сохранением текущей страницы
      navigate("/register", { state: { from: location } });
    } else {
      toggleExchange(user.id);
    }
  }, [currentUser, navigate, location]);

  return (
    <UserCardExpandedUI
      user={user}
      isLiked={isLiked}
      isExcahnged={hasExchange(user.id)}
      onLikeToggle={handleLikeToggle}
      onExchangeClick={handleExchangeClick}
    />
  );
};
