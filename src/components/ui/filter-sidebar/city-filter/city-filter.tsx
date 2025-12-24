import s from "./city-filter.module.css";
import down from "../../../../assets/icon-down.svg";
import up from "../../../../assets/icon-up.svg";
import type { Props } from "./type";
import { IconButtonUI } from "./../../iconButton/iconButton";

export const CityFilter = ({
  cities,
  selectedCity,
  onChange,
  showAll,
  onToggleShowAll,
}: Props) => {
  const visibleCities = showAll ? cities : cities.slice(0, 3);

  return (
    <div className={s.group}>
      {visibleCities.map((city) => (
        <label key={city} className={s.option}>
          <input
            type="checkbox"
            className={s.checkbox}
            checked={selectedCity === city}
            onChange={(e) => onChange(e.target.checked ? city : null)}
          />
          <span className={s.label}>{city}</span>
        </label>
      ))}

      {cities.length > 3 && (
        <button type="button" className={s.moreButton} onClick={onToggleShowAll}>
          {showAll ? (
            <>
              <span>Скрыть</span>
              <IconButtonUI icon={up} />
            </>
          ) : (
            <>
              <span>Смотреть все {cities.length}</span>
              <IconButtonUI icon={down} />
            </>
          )}
        </button>
      )}
    </div>
  );
};
