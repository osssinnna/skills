import React from 'react';
import chevronRightIcon from '../../../assets/chevron-right.svg';

interface IconChevronRightProps {
  /** Размер иконки в пикселях */
  size?: number;
  /** Дополнительные CSS классы */
  className?: string;
  /** Дополнительные стили */
  style?: React.CSSProperties;
  /** Цвет иконки (если SVG поддерживает currentColor) */
  color?: string;
}

/**
 * Компонент иконки стрелки вправо (chevron right)
 * Использует SVG файл из папки assets
 */
export const IconChevronRight: React.FC<IconChevronRightProps> = ({
  size = 16,
  className = '',
  style,
  color,
}) => {
  return (
    <img
      src={chevronRightIcon}
      alt="" // Декоративная иконка, скрыта от скринридеров
      className={`icon-chevron-right ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'block',
        color: color, // Работает если SVG использует currentColor
        ...style,
      }}
      aria-hidden="true" // Скрываем от скринридеров
      loading="lazy" // Ленивая загрузка
    />
  );
};
