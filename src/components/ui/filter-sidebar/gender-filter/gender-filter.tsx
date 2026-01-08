import type { Props } from "./type";
import s from "./gender-filter.module.css";

export const GenderFilter = ({ gender, onChange }: Props) => {
  return (
    <ul className={s.group}>
      {[
        { value: null, label: "Не имеет значения" },
        { value: "Мужской" as const, label: "Мужской" },
        { value: "Женский" as const, label: "Женский" },
      ].map((opt) => (
        <li key={String(opt.value)}>
          <label className={s.option}>
            <input
              type="radio"
              className={s.radio}
              checked={gender === opt.value}
              onChange={() => onChange(opt.value)}
            />
            <span className={s.label}>{opt.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
