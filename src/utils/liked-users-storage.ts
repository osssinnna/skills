const LIKED_USERS_KEY = "likedUsersIds";

export const getLikedUsersIds = (): string[] => {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(LIKED_USERS_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    // храним всегда строками, чтобы сравнение было стабильным
    return parsed.map(String).filter(Boolean);
  } catch {
    return [];
  }
};

export const setLikedUsersIds = (ids: Array<string | number>): void => {
  if (typeof window === "undefined") return;

  const normalized = Array.from(new Set(ids.map(String).filter(Boolean)));
  window.localStorage.setItem(LIKED_USERS_KEY, JSON.stringify(normalized));
};
