export const EXCHANGE_USER_IDS_KEY = "exchangeUserIds";

type UserId = number;

export const getExchangedUserIds = (): UserId[] => {
  const stored = localStorage.getItem(EXCHANGE_USER_IDS_KEY);

  if (!stored) return [];

  try {
    return JSON.parse(stored) as UserId[];
  } catch {
    return [];
  }
};