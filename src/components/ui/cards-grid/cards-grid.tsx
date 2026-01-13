import { memo } from "react";
import { UserCard } from "../../userCard/userCard";
import styles from "./cards-grid.module.css";
import type { User } from "../../../utils/types";

interface CardsGridProps {
  users: User[];
  onLikeToggle?: (userId: number) => void;
  columns?: number; 
}

export const CardsGrid = memo<CardsGridProps>(({ users, columns = 3 }) => {
  if (users.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyText}>Нет пользователей для отображения</p>
      </div>
    );
  }

  return (
    <div 
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)` // +вариативность
      }}
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} onLikeToggle={() => {}} />
      ))}
    </div>
  );
});