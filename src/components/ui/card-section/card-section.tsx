import React, { useState, useMemo, useCallback } from "react";
import { CardsGrid } from "../cards-grid/cards-grid";
import { ButtonUI } from "../button/button";
import { IconChevronRight } from "../icon-chevron-right/icon-chevron-right";
import styles from "./card-section.module.css";
import type { User } from "../../../utils/types";

interface CardSectionProps {
  title: string;
  users: User[];
  maxPreviewCount: number;
  navigationTo: (link: string) => void;
}

export const CardSection: React.FC<CardSectionProps> = ({
  title,
  users,
  maxPreviewCount,
  navigationTo,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedUsers = useMemo(() => {
    return isExpanded ? users : users.slice(0, maxPreviewCount);
  }, [isExpanded, users, maxPreviewCount]);

  const shouldShowSeeAllButton = !isExpanded && users.length > maxPreviewCount;

  const handleSeeAllClick = useCallback(() => {
    if (users.length <= 10) {
      setIsExpanded(true);
    } else {
      const categorySlug = title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-zа-яё0-9-]/g, "");
      navigationTo(`/category/${categorySlug}`);
    }
  }, [users.length, title, navigationTo]);

  // Определяем заголовок в зависимости от состояния
  const sectionTitle = isExpanded ? `Подходящие предложения: ${users.length}` : title;

  return (
    <section className={styles.section} aria-label={`Секция: ${sectionTitle}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{sectionTitle}</h2>

        <div className={styles.buttonsContainer}>
          {shouldShowSeeAllButton && (
            <div className={styles.actionButton}>
              <ButtonUI
                color="secondary"
                fullSize={false}
                disabledToggle={false}
                onClick={handleSeeAllClick}
              >
                <div className={styles.buttonContent}>
                  <span>Смотреть все</span>
                  <IconChevronRight size={20} style={{ marginLeft: "8px" }} />
                </div>
              </ButtonUI>
            </div>
          )}
        </div>
      </div>

      <div className={styles.gridContainer}>
        <CardsGrid users={displayedUsers} />
      </div>
    </section>
  );
};
