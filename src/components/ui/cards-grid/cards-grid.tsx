import { memo, useCallback } from 'react';
import { PersonCard } from '../../personCard/personCard';
import styles from "./cards-grid.module.css";

export type Skill = {
  id: number;
  name: string;
  description: string;
};

export type Subcategory = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  avatarUrl: string;
  name: string;
  location: string;
  age: string;
  gender: 'Мужской' | 'Женский';
  skillCanTeach: Skill;
  images: string[];
  subcategoriesWantToLearn: Subcategory[];
};

interface CardsGridProps {
  users: User[];
  onLikeToggle?: (userId: number) => void;
}

// Мемоизируем весь компонент
export const CardsGrid = memo<CardsGridProps>(({ 
  users, 
  onLikeToggle 
}) => {
  const handleLikeToggle = useCallback((userId: number) => {
    onLikeToggle?.(userId);
  }, [onLikeToggle]);

  if (users.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyText}>Нет пользователей для отображения</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <PersonCard
          key={user.id}
          person={user}
          onLikeToggle={() => handleLikeToggle(user.id)}
        />
      ))}
    </div>
  );
});