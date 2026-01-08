import { useState, useRef, useEffect } from "react";
import s from "./city-autocomplete.module.css";
import citiesData from "../../../mock/cities.json";
import { Input } from "../input";
import clsx from "clsx";
import up from "../../../assets/icon-up.svg";
import down from "../../../assets/icon-down.svg";

export type City = {
  city_id: string;
  country_id: string;
  region_id: string;
  name: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
};

export const CityAutocomplete = ({ value, onChange, error, placeholder }: Props) => {
  const cities: City[] = citiesData.city;
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const trimmedValue = value.trim().toLowerCase();

  const filteredCities =
    trimmedValue === ""
      ? []
      : cities
          .filter((city) => city.name.toLowerCase().includes(trimmedValue))
          .slice(0, 8);

  const shouldShowDropdown = isOpen && filteredCities.length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setIsOpen(true);
  };

  const handleSelect = (cityName: string) => {
    onChange(cityName);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={s.wrapperLocation} ref={wrapperRef}>
      <Input
        label="Местоположение"
        name="location"
        value={value}
        placeholder={placeholder}
        error={error}
        onChange={handleInputChange}
        required
        className={clsx(s.input, shouldShowDropdown && s.inputActive)}
      />
      {shouldShowDropdown ? (
        <img className={s.icon} src={up} />
      ) : (
        <img className={s.icon} src={down} />
      )}

      {shouldShowDropdown && (
        <ul className={clsx(s.dropdown, s.dropdownActive)}>
          {filteredCities.map((city) => (
            <li
              key={city.city_id}
              className={s.item}
              onClick={() => handleSelect(city.name)}
            >
              {city.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
