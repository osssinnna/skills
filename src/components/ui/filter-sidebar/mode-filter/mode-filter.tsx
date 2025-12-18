import type { Props } from "./type";
import s from "./mode-filter.module.css";

export const ModeFilter = ({ mode, onChange }: Props) => {
  return (
    <div className={s.group}>
      {[
        { value: "all" as const, label: "Все" },
        { value: "wantToLearn" as const, label: "Хочу научиться" },
        { value: "canTeach" as const, label: "Могу научить" },
      ].map((opt) => (
        <label key={opt.value} className={s.option}>
          <input
            type="radio"
            className={s.radio}
            checked={mode === opt.value}
            onChange={() => onChange(opt.value)}
          />
          <span className={s.label}>{opt.label}</span>
        </label>
      ))}
    </div>
  );
};
