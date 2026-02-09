import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { selectSubcategoryIdsBySelectedCategories } from "../categoriesSlice/selectors";
import type { User } from "../../utils/types";

export const selectUsers = (state: RootState) => state.users.users;
export const selectFilters = (state: RootState) => state.users.filters;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilters, selectSubcategoryIdsBySelectedCategories],
  (users, filters, categorySubIds) => {
    if (!users || !Array.isArray(users)) return [];

    const activeSubIds =
      filters.subcategoryIds.length > 0
        ? filters.subcategoryIds
        : categorySubIds;

    return users.filter((user) => {
      if (filters.gender && user.gender !== filters.gender) return false;
      if (filters.city && user.location !== filters.city) return false;

      if (activeSubIds.length > 0) {
        const hasWant = user.subcategoriesWantToLearn.some((sub) =>
          activeSubIds.includes(sub.id)
        );

        const hasTeach = activeSubIds.includes(
          user.skillCanTeach.subcategoryId
        );

        if (filters.mode === "wantToLearn") return hasWant;
        if (filters.mode === "canTeach") return hasTeach;

        return hasWant || hasTeach;
      }

      return true;
    });
  }
);

export const selectHasActiveFilters = createSelector(
  [selectFilters],
  (filters) =>
    filters.mode !== "all" ||
    filters.gender !== null ||
    filters.city !== null ||
    filters.subcategoryIds.length > 0 ||
    filters.categoryIds.length > 0
);

export const selectPopularUsers = createSelector(
  [selectFilteredUsers],
  (users) => (users || []).slice(0, 10)
);

export const selectNewUsers = createSelector([selectFilteredUsers], (users) =>
  [...(users || [])].reverse().slice(0, 10)
);

export const selectUserById = createSelector(
  [selectUsers, (_, userId) => userId],
  (users, userId) => users.find((user) => user.id === userId)
);

export const selectUsersByNameOrSkill = createSelector(
  [selectFilteredUsers, (_, search: string) => search],
  (users, search): User[] => {
    if (!search.trim()) {
      return users; // если строка поиска пустая, возвращаем всех
    }

    const lowerSearch = search.toLowerCase();

    return users.filter((user) => {
      // Поиск по имени и фамилии
      const matchesName = user.name.toLowerCase().includes(lowerSearch);

      // Поиск по скиллам
      const matchesWant = user.subcategoriesWantToLearn.some((sub) =>
        sub.name.toLowerCase().includes(lowerSearch)
      );

      const matchesTeach = user.skillCanTeach.name
        .toLowerCase()
        .includes(lowerSearch);

      return matchesName || matchesWant || matchesTeach;
    });
  }
);

export const selectActiveSection = (state: RootState) => state.users.activeSection;

export const selectSimilarUsers = createSelector(
  [
    selectUsers,
    (state: RootState, userId: number) => userId,
    (state: RootState, _userId: number, limit: number = 8) => limit
  ],
  (users, userId, limit): User[] => {
    if (!users || users.length === 0 || !userId) return [];
    
    const currentUser = users.find(user => user.id === userId);
    if (!currentUser) return [];
    
    const currentUserTeaches = currentUser.skillCanTeach?.name || "";
    const currentUserWantsToLearn = currentUser.subcategoriesWantToLearn?.map(sub => sub.name) || [];
    
    if (!currentUserTeaches && currentUserWantsToLearn.length === 0) {
      return users
        .filter(user => user.id !== userId)
        .slice(0, limit);
    }
    
    const scoredUsers = users
      .filter(user => user.id !== userId)
      .map(user => {
        let score = 0;
        
        // 1. Совпадение по навыкам преподавания
        const userTeaches = user.skillCanTeach?.name || "";
        if (userTeaches && currentUserTeaches) {
          // Простая проверка на совпадение слов в названии навыка
          const currentTeachWords = currentUserTeaches.toLowerCase().split(/\s+/);
          const userTeachWords = userTeaches.toLowerCase().split(/\s+/);
          
          const commonTeachWords = currentTeachWords.filter(word => 
            userTeachWords.includes(word)
          ).length;
          
          score += commonTeachWords * 3;
          
          // Полное совпадение названия навыка
          if (currentUserTeaches.toLowerCase() === userTeaches.toLowerCase()) {
            score += 10;
          }
        }
        
        // 2. Совпадение по желаемым навыкам
        const userWantsToLearn = user.subcategoriesWantToLearn?.map(sub => sub.name) || [];
        if (currentUserWantsToLearn.length > 0 && userWantsToLearn.length > 0) {
          const commonWants = currentUserWantsToLearn.filter(want => 
            userWantsToLearn.some(userWant => 
              userWant.toLowerCase().includes(want.toLowerCase()) || 
              want.toLowerCase().includes(userWant.toLowerCase())
            )
          ).length;
          
          score += commonWants * 2;
        }
        
        // 3. Обратное совпадение: текущий пользователь хочет научиться тому, что другой может преподавать
        if (currentUserWantsToLearn.length > 0 && userTeaches) {
          const wantsWhatUserTeaches = currentUserWantsToLearn.some(want =>
            userTeaches.toLowerCase().includes(want.toLowerCase()) ||
            want.toLowerCase().includes(userTeaches.toLowerCase())
          );
          
          if (wantsWhatUserTeaches) {
            score += 5;
          }
        }
        
        // 4. Прямое совпадение: пользователь хочет научиться тому, что текущий может преподавать
        if (currentUserTeaches && userWantsToLearn.length > 0) {
          const wantsWhatCurrentTeaches = userWantsToLearn.some(want =>
            currentUserTeaches.toLowerCase().includes(want.toLowerCase()) ||
            want.toLowerCase().includes(currentUserTeaches.toLowerCase())
          );
          
          if (wantsWhatCurrentTeaches) {
            score += 5;
          }
        }
        
        // 5. Бонус за одинаковую локацию
        if (user.location && currentUser.location && 
            user.location.toLowerCase() === currentUser.location.toLowerCase()) {
          score += 2;
        }
        
        // 6. Бонус за одинаковый возрастной диапазон
        if (user.age && currentUser.age && user.age === currentUser.age) {
          score += 1;
        }
        
        return { user, score };
      })
      .filter(item => item.score > 0) // Фильтруем только с положительным скором
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.user);
    
    return scoredUsers;
  }
);
