import { useEffect, useState } from "react";
import categoriesData from "../../../mock/categories.json";
import type { CategoryWithSubs } from "../../ui/registration/step-basic-info";

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoryWithSubs[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setError(null);
        await new Promise((resolve) => setTimeout(resolve, 300));
        setCategories(categoriesData as CategoryWithSubs[]);
      } catch {
        setError("Не удалось загрузить категории");
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  return { categories, isLoading, error };
};
