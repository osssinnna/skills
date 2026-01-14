import React, { useMemo } from "react";
import { CardsGrid } from "../ui/cards-grid/cards-grid";
import styles from "./similar-cards-section.module.css";
import type { User } from "../../utils/types";
import navigationIcon from "../../assets/navigation.svg";

interface SimilarCardsSectionProps {
  title: string;
  users: User[];
}

export const SimilarCardsSection: React.FC<SimilarCardsSectionProps> = ({
  title,
  users,
}) => {
  const displayedUsers = useMemo(() => {
    return users.slice(0, 4);
  }, [users]);

  const handleViewAll = () => {
    window.location.href = "/";
  };

  return (
    <section className={styles.section} aria-label={`Секция: ${title}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        
        <div className={styles.iconButtonWrapper}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={handleViewAll}
            title="Смотреть все"
          >
            <img 
              src={navigationIcon} 
              alt="Навигация" 
              className={styles.icon}
            />
          </button>
        </div>
      </div>

      <div className={styles.gridContainer}>
        <CardsGrid users={displayedUsers} columns={4} />
      </div>
    </section>
  );
};