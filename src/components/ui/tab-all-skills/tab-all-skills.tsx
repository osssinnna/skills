import React, { useCallback, useMemo } from 'react';
import styles from './tab-all-skills.module.css';
import { getCategoryIconPath, getCategoryColor } from '../../../utils/category-icons';

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
};

export const TabAllSkills: React.FC<TabAllSkillsProps> = ({
  categories,
  onClose,
  isOpen = true,
}) => {
  const handleSubcategoryClick = useCallback((id: number) => {
    console.log('selected subcategory id:', id);
    onClose?.();
  }, [onClose]);

  const categoriesWithIcons = useMemo(() => 
    categories.map(category => ({
      ...category,
      iconPath: getCategoryIconPath(category.name),
      color: getCategoryColor(category.name)
    })), 
    [categories]
  );

  if (!isOpen || categories.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      {categoriesWithIcons.map((category) => (
        <div key={category.id} className={styles.category}>
          <div className={styles.categoryHeader}>
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
          </div>

          <ul className={styles.subcategories}>
            {category.subcategories.map((sub) => (
              <li key={sub.id} className={styles.subcategoryItem}>
                <button
                  type="button"
                  className={styles.subcategoryButton}
                  onClick={() => handleSubcategoryClick(sub.id)}
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