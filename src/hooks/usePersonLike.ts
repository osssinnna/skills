import { useState, useCallback } from "react";

const checkIsLiked = (id: number | string) => {
  // заглушка для проверки — пока всегда false
  return false;
};

export const usePersonLike = (
  personId: number | string,
  onLikeToggle: (id?: number | string) => void
) => {
  const [isLiked, setIsLiked] = useState(() => checkIsLiked(personId));

  const toggleLike = useCallback(() => {
    setIsLiked((prev) => !prev);
    onLikeToggle?.(personId);
  }, [onLikeToggle, personId]);

  return { isLiked, toggleLike } as const;
};
