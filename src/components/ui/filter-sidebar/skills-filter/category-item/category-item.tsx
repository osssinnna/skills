import { useEffect, useRef } from "react";
import s from "./category-item.module.css";
import down from "../../../../../assets/icon-down.svg";
import up from "../../../../../assets/icon-up.svg";
import { IconButtonUI } from "../../../iconButton";
import type { CategoryItemProps } from "./type";

export const CategoryItem = ({
  category,
  selectedCount,
  total,
  expanded,
  onToggleExpand,
  onToggleCategory,
  selectedIds,
  onToggleSub,
}: CategoryItemProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.indeterminate = selectedCount > 0 && selectedCount < total;
  }, [selectedCount, total]);

  return (
    <li className={s.category}>
      <div className={s.categoryHeader}>
        <input
          ref={ref}
          type="checkbox"
          className={s.checkbox}
          checked={selectedCount === total}
          onChange={onToggleCategory}
        />

        <span className={s.categoryName} onClick={onToggleExpand}>
          {category.name}
        </span>

        <div className={s.chevron} onClick={onToggleExpand}>
          {expanded && <IconButtonUI icon={up} />}
          {!expanded && (
            <span className={s.downIconHover}>
              <IconButtonUI icon={down} />
            </span>
          )}
        </div>
      </div>

      {expanded && (
        <ul className={s.subcats}>
          {category.subcategories.map((sub) => (
            <li key={sub.id}>
              <label className={s.subcat}>
                <input
                  type="checkbox"
                  className={s.checkbox}
                  checked={selectedIds.includes(sub.id)}
                  onChange={() => onToggleSub(sub.id)}
                />
                <span className={s.subcatLabel}>{sub.name}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
