import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { UserCardExpandedUI } from "../ui/userCardExpanded/userCardExpandedUI";
import { SimilarCardsSection } from "../similar-cards-section/similar-cards-section";
import type { TUserCardExpandedUIProps } from "../ui/userCardExpanded/types";

import { usePersonLike } from "../../hooks/usePersonLike";
import { selectCurrentUser } from "../../services/currentUserSlice/selectors";
import { useExchangeUsers } from "../../hooks/useExchangeUsers";
import { useSimilarUsers } from "../../hooks/useSimilarUsers";

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
      navigate("/register", { state: { from: location } });
    } else {
      toggleExchange(user.id);
    }
  }, [currentUser, navigate, location, toggleExchange, user.id]);

  // Получаем похожих пользователей 
  const similarUsers = useSimilarUsers(user.id, 8);

  // Если нет похожих пользователей, не показываем 
  const hasSimilarUsers = similarUsers.length > 0;

  return (
    <>
      <UserCardExpandedUI
        user={user}
        isLiked={isLiked}
        isExcahnged={hasExchange(user.id)}
        onLikeToggle={handleLikeToggle}
        onExchangeClick={handleExchangeClick}
      />
      
      {hasSimilarUsers && (
        <SimilarCardsSection
          title="Похожие пользователи"
          users={similarUsers}
        />
      )}
    </>
  );
};