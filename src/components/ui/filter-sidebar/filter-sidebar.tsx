import s from "./filter-sidebar.module.css";
import type { Props } from "./type";

export const FilterSidebarUI = ({
  modeFilter,
  skillsFilter,
  genderFilter,
  cityFilter,
}: Props) => {
  return (
    <aside className={s.filter}>
      <section className={s.section}>
        <h4 className={s.title}>Режим</h4>
        {modeFilter}
      </section>

      <section className={s.section}>
        <h4 className={s.title}>Навыки</h4>
        {skillsFilter}
      </section>

      <section className={s.section}>
        <h4 className={s.title}>Пол</h4>
        {genderFilter}
      </section>

      <section className={s.section}>
        <h4 className={s.title}>Город</h4>
        {cityFilter}
      </section>
    </aside>
  );
};
