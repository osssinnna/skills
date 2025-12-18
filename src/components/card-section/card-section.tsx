import React, { useMemo } from 'react';
import { CardsGrid, type User } from '../ui/cards-grid/cards-grid';
import { ButtonUI } from '../ui/button/button';
import { IconChevronRight } from '../ui/icon-chevron-right/icon-chevron-right';
import styles from './card-section.module.css';

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
  // Отображаем только maxPreviewCount пользователей
  const displayedUsers = useMemo(() => {
    return users.slice(0, maxPreviewCount);
  }, [users, maxPreviewCount]);

 

  return (
    <section className={styles.section} aria-label={`Секция: ${title}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        
        {(
          <div className={styles.actionButton}>
            <ButtonUI
              color="secondary"
              fulsSize={false}
              disabledToggle={false}
              onClick={() => navigationTo(`/category/${title.toLowerCase().replace(/\s+/g, '-')}`)}
            >
              <div className={styles.buttonContent}>
                <span>Смотреть все</span>
                <IconChevronRight size={20} style={{ marginLeft: '8px' }} />
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