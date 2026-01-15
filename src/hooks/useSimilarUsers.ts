import { useSelector } from "../services/store";
import { selectUsers } from "../services/usersSlice/selectors";

export const useSimilarUsers = (
  currentUserId: number | undefined,
  limit: number = 4
) => {
  return useSelector((state) => {
    if (!currentUserId) return [];
    
    const allUsers = selectUsers(state);
    const currentUser = allUsers.find(user => user.id === currentUserId);
    
    if (!currentUser) return [];
    
    const currentUserSkill = currentUser.skillCanTeach?.name?.toLowerCase() || "";
    const currentUserWantsToLearn = currentUser.subcategoriesWantToLearn || [];
    
    if (!currentUserSkill && currentUserWantsToLearn.length === 0) {
      return allUsers
        .filter(user => user.id !== currentUserId)
        .slice(0, limit);
    }
    
    const scoredUsers = allUsers
      .filter(user => user.id !== currentUserId)
      .map(user => {
        let score = 0;
        
        // 1. Проверяем одинаковые навыки 
        const userSkill = user.skillCanTeach?.name?.toLowerCase() || "";
        if (currentUserSkill && userSkill && 
            (currentUserSkill.includes(userSkill) || userSkill.includes(currentUserSkill))) {
          score += 3;
        }
        
        // 2. Проверяем одинаковые желаемые навыки
        const userWantsToLearn = user.subcategoriesWantToLearn || [];
        currentUserWantsToLearn.forEach(currentWant => {
          userWantsToLearn.forEach(userWant => {
            const currentName = currentWant.name.toLowerCase();
            const userName = userWant.name.toLowerCase();
            if (currentName.includes(userName) || userName.includes(currentName)) {
              score += 2;
            }
          });
        });
        
        // 3. Проверяем взаимодополняемость
        if (currentUserSkill && userWantsToLearn.length > 0) {
          const wantsCurrentSkill = userWantsToLearn.some(want => 
            want.name.toLowerCase().includes(currentUserSkill) ||
            currentUserSkill.includes(want.name.toLowerCase())
          );
          if (wantsCurrentSkill) score += 2;
        }
        
        if (userSkill && currentUserWantsToLearn.length > 0) {
          const currentWantsUserSkill = currentUserWantsToLearn.some(want => 
            want.name.toLowerCase().includes(userSkill) ||
            userSkill.includes(want.name.toLowerCase())
          );
          if (currentWantsUserSkill) score += 2;
        }
        
        // 4. Проверка локи
        if (user.location === currentUser.location) {
          score += 1;
        }
        
        return { user, score };
      })
      // Сортируем и берем лучших
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.user);
    
    return scoredUsers;
  });
};

export const useRandomUsers = (
  currentUserId: number | undefined,
  limit: number = 4
) => {
  return useSelector((state) => {
    const allUsers = selectUsers(state);
    return allUsers
      .filter(user => user.id !== currentUserId)
      .slice(0, limit);
  });
};

 /*Хук для пользователей с теми же навыками*/

export const useUsersWithSameSkill = (
  currentUserId: number | undefined,
  limit: number = 4
) => {
  return useSelector((state) => {
    if (!currentUserId) return [];
    
    const allUsers = selectUsers(state);
    const currentUser = allUsers.find(user => user.id === currentUserId);
    
    if (!currentUser || !currentUser.skillCanTeach?.name) return [];
    
    const currentSkill = currentUser.skillCanTeach.name.toLowerCase();
    
    return allUsers
      .filter(user => {
        if (user.id === currentUserId) return false;
        const userSkill = user.skillCanTeach?.name?.toLowerCase() || "";
        return userSkill.includes(currentSkill) || currentSkill.includes(userSkill);
      })
      .slice(0, limit);
  });
};