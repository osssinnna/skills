import React, { useMemo } from "react";
import { CardsGrid } from "../ui/cards-grid/cards-grid";
import { ButtonUI } from "../ui/button/button";
import { IconChevronRight } from "../ui/icon-chevron-right/icon-chevron-right";
import styles from "./card-section.module.css";
import type { User } from "../../utils/types";

interface CardSectionProps {
  title: string;
  users: User[];
  maxPreviewCount?: number;
  onOpen?: () => void;
}

export const CardSection: React.FC<CardSectionProps> = ({
  title,
  users = [],
  maxPreviewCount,
  onOpen,
}) => {
  const isPreview = maxPreviewCount !== undefined;

  // Отображаем только maxPreviewCount пользователей, если указано
  const displayedUsers = useMemo(() => {
    const safeUsers = users || [];
    if (maxPreviewCount !== undefined) {
      return safeUsers.slice(0, maxPreviewCount);
    }
    return safeUsers;
  }, [users, maxPreviewCount]);

  return (
    <section className={styles.section} aria-label={`Секция: ${title}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        {isPreview && onOpen && (
          <div className={styles.actionButton}>
            <ButtonUI
              color="secondary"
              fullSize={false}
              disabledToggle={false}
              onClick={onOpen}
            >
              <div className={styles.buttonContent}>
                <span>Смотреть все</span>
                <IconChevronRight size={20} />
              </div>
            </ButtonUI>
          </div>
        )}
      </div>

      <div className={styles.gridContainer}>
        <CardsGrid users={displayedUsers} />
      </div>
    </section>
  );
};
