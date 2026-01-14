import { useCallback, useState } from "react";
import { EXCHANGE_USER_IDS_KEY, getExchangedUserIds } from "../utils/obmen";

export function useExchangeUsers() {
  const [ids, setIds] = useState<number[]>(getExchangedUserIds);

  const sync = (updated: number[]) => {
    localStorage.setItem(EXCHANGE_USER_IDS_KEY, JSON.stringify(updated));
  };

  const hasExchange = useCallback((id: number) => ids.includes(id), [ids]);

  const toggleExchange = useCallback((id: number) => {
    setIds((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      
      sync(updated);
      return updated;
    });
  }, []);

  return {
    exhangeIds: ids,
    hasExchange,
    toggleExchange,
  };
}