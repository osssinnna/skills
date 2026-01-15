import React, { useCallback, useMemo, useEffect } from 'react';
import styles from './tab-all-skills.module.css';
import { getCategoryIconPath, getCategoryColor } from '../../../utils/category-icons';
import { useDispatch } from '../../../services/store';
import { setFilters } from '../../../services/usersSlice/usersSlice';

export type Subcategory = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
  subcategories: Subcategory[];
};

export type TabAllSkillsProps = {
  categories: Category[];
  onClose?: () => void;
  isOpen?: boolean;
  centered?: boolean;
};

export const TabAllSkills: React.FC<TabAllSkillsProps> = ({
  categories,
  onClose,
  isOpen = false,
}) => {
  const dispatch = useDispatch();

  const handleCategoryClick = useCallback((categoryId: number) => {
    dispatch(setFilters({ categoryIds: [categoryId], subcategoryIds: [] }));
    onClose?.();
  }, [dispatch, onClose]);

  const handleSubcategoryClick = useCallback((subcategoryId: number, categoryId: number) => {
    dispatch(setFilters({ subcategoryIds: [subcategoryId], categoryIds: [categoryId] }));
    onClose?.();
  }, [dispatch, onClose]);

  const categoriesWithIcons = useMemo(() => 
    categories.map(category => ({
      ...category,
      iconPath: getCategoryIconPath(category.name),
      color: getCategoryColor(category.name)
    })), 
    [categories]
  );

  if (!isOpen || categories.length === 0) return null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  
  return (
    <div className={styles.wrapper}>
      {categoriesWithIcons.map((category) => (
        <div key={category.id} className={styles.category}>
          <button
            type="button"
            className={styles.categoryHeader}
            onClick={() => handleCategoryClick(category.id)}
          >
            <div 
              className={styles.iconWrapper}
              style={{ backgroundColor: category.color }}
            >
              <img 
                src={category.iconPath}
                alt={category.name}
                className={styles.categoryIcon}
                width={20}
                height={20}
                loading="lazy"
              />
            </div>
            <h3 className={styles.categoryTitle}>{category.name}</h3>
          </button>

          <ul className={styles.subcategories}>
            {category.subcategories.map((sub) => (
              <li key={sub.id} className={styles.subcategoryItem}>
                <button
                  type="button"
                  className={styles.subcategoryButton}
                  onClick={() => handleSubcategoryClick(sub.id, category.id)}
                >
                  {sub.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};