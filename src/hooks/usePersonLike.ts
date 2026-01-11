import { useState, useCallback } from "react";
import {
  getLikedUsersIds,
  setLikedUsersIds,
} from "../utils/liked-users-storage";

export const usePersonLike = (
  personId: number | string,
  onLikeToggle?: (id?: number | string) => void
) => {
  const id = String(personId);

  const [isLiked, setIsLiked] = useState(() => getLikedUsersIds().includes(id));

  const toggleLike = useCallback(() => {
    setIsLiked((prev) => {
      const current = getLikedUsersIds();

      const nextIds = prev
        ? current.filter((x) => x !== id) // было лайкнуто → снимаем
        : [...current, id]; // не было → добавляем

      setLikedUsersIds(nextIds);
      return !prev;
    });

    onLikeToggle?.(personId);
  }, [id, personId, onLikeToggle]);

  return { isLiked, toggleLike } as const;
};
