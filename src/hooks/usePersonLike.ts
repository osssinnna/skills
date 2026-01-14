import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "likedUsersIds";
const isBrowser = typeof window !== "undefined";

const readIds = (): string[] => {
  if (!isBrowser) return [];
  
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
  if (!isBrowser) return;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(new Set(ids))));
  window.dispatchEvent(new CustomEvent("likedUsersChanged"));
};

const subscribe = (callback: () => void) => {
  if (!isBrowser) return () => {};
  
  window.addEventListener("likedUsersChanged", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("likedUsersChanged", callback);
    window.removeEventListener("storage", callback);
  };
};

export const usePersonLike = (
  personId: number | string,
  onLikeToggle?: (id?: number | string) => void
) => {
  const id = String(personId);

  const isLiked = useSyncExternalStore(
    subscribe,
    () => readIds().includes(id),
    () => false // SSR fallback
  );

  const toggleLike = useCallback(() => {
    const current = readIds();
    const currentlyLiked = current.includes(id);
    const next = currentlyLiked 
      ? current.filter((x) => x !== id) 
      : [...current, id];
    
    writeIds(next);
    onLikeToggle?.(personId);
  }, [id, personId, onLikeToggle]);

  return { isLiked, toggleLike } as const;
};
