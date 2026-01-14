import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "likedUsersIds";

const readIds = (): string[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(String);
  } catch {
    return [];
  }
};

const writeIds = (ids: string[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(new Set(ids))));
  window.dispatchEvent(new CustomEvent("likedUsersChanged"));
};

export const usePersonLike = (
  personId: number | string,
  onLikeToggle?: (id?: number | string) => void
) => {
  const id = useMemo(() => String(personId), [personId]);

  const [isLiked, setIsLiked] = useState(() => readIds().includes(id));

  useEffect(() => {
    const handleLikedUsersChanged = () => {
      setIsLiked(readIds().includes(id));
    };

    window.addEventListener("likedUsersChanged", handleLikedUsersChanged);
    window.addEventListener("storage", handleLikedUsersChanged);

    return () => {
      window.removeEventListener("likedUsersChanged", handleLikedUsersChanged);
      window.removeEventListener("storage", handleLikedUsersChanged);
    };
  }, [id]);

  const toggleLike = useCallback(() => {
    setIsLiked((prev) => {
      const current = readIds();
      const next = prev ? current.filter((x) => x !== id) : [...current, id];

      writeIds(next);
      onLikeToggle?.(personId);

      return !prev;
    });
  }, [id, personId, onLikeToggle]);

  return { isLiked, toggleLike } as const;
};
