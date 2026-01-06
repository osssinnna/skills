import s from "./city-filter.module.css";
import down from "../../../../assets/icon-down.svg";
import up from "../../../../assets/icon-up.svg";
import type { Props } from "./type";
import { IconButtonUI } from "./../../iconButton/iconButton";

export const CityFilter = ({
  cities,
  selectedCity,
  onChange,
  visibleCities,
  showAll,
  onToggleShowAll,
}: Props) => {
  return (
    <ul className={s.group}>
      {visibleCities.map((city) => (
        <li key={city}>
          <label className={s.option}>
            <input
              type="checkbox"
              className={s.checkbox}
              checked={selectedCity === city}
              onChange={(e) => onChange(e.target.checked ? city : null)}
            />
            <span className={s.label}>{city}</span>
          </label>
        </li>
      ))}

      {cities.length > 3 && (
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
