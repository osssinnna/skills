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
    <div className={s.category}>
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

        <button className={s.chevron} onClick={onToggleExpand}>
          {expanded ? <IconButtonUI icon={up} /> : <IconButtonUI icon={down} />}
        </button>
      </div>

      {expanded && (
        <div className={s.subcats}>
          {category.subcategories.map((sub) => (
            <label key={sub.id} className={s.subcat}>
              <input
                type="checkbox"
                className={s.checkbox}
                checked={selectedIds.includes(sub.id)}
                onChange={() => onToggleSub(sub.id)}
              />
              <span className={s.subcatLabel}>{sub.name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
