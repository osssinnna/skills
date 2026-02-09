import s from "./skills-filter.module.css";
import type { Props } from "./type";
import down from "../../../../assets/icon-down.svg";
import up from "../../../../assets/icon-up.svg";
import { IconButtonUI } from "../../iconButton";

export const SkillsFilterUI = ({
  categories,
  hasMore,
  showAll,
  onToggleShowAll,
}: Props) => {
  return (
    <ul className={s.skills}>
      {categories}

      {hasMore && (
        <div className={s.moreButton} onClick={onToggleShowAll}>
          {showAll ? (
            <>
              <span>Скрыть</span>
              <IconButtonUI icon={up} />
            </>
          ) : (
            <>
              <span>Смотреть все</span>
              <IconButtonUI icon={down} />
            </>
          )}
        </div>
      )}
    </ul>
  );
};
