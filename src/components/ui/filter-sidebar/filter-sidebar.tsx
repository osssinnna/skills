import clsx from "clsx";
import s from "./filter-sidebar.module.css";
import type { Props } from "./type";

export const FilterSidebarUI = ({
  hasActiveFilters,
  onResetAll,
  activeTagsCount,
  modeFilter,
  skillsFilter,
  genderFilter,
  cityFilter,
}: Props) => {
  return (
    <aside className={s.filter}>
      <section className={clsx(s.section, s.filters)}>
        <h4 className={s.titleFilters}>
          Фильтры {activeTagsCount > 0 && `(${activeTagsCount})`}
        </h4>
        {hasActiveFilters && (
          <button className={s.buttonReset} onClick={onResetAll}>
            <span>Сбросить</span> <span>✕</span>
          </button>
        )}
      </section>

      <section className={s.section}>{modeFilter}</section>

      <section className={s.section}>
        <h4 className={s.title}>Навыки</h4>
        {skillsFilter}
      </section>

      <section className={s.section}>
        <h4 className={s.title}>Пол автора</h4>
        {genderFilter}
      </section>

      <section className={s.section}>
        <h4 className={s.title}>Город</h4>
        {cityFilter}
      </section>
    </aside>
  );
};
