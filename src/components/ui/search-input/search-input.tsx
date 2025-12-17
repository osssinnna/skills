import type { ChangeEvent, FC } from "react";
import styles from "./search-input.module.css";
import { IconButtonUI } from "../IconButton/IconButtonUI";
import crossIcon from "../../../assets/icon-cross.svg";
import searchIcon from "../../../assets/icon-search.svg";

type SearchInputUIProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder?: string;
};

export const SearchInputUI: FC<SearchInputUIProps> = ({
  value,
  onChange,
  onClear,
  placeholder = "Поиск",
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.contain} role="search">
      <img src={searchIcon} alt="Поиск" className={styles.searchIcon} />
      <input
        className={styles.input}
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />

      {value && (
        <div className={styles.clearButtonWrapper}>
          <IconButtonUI
            icon={crossIcon}
            onClick={onClear}
            aria-label="Очистить поиск"
          />
        </div>
      )}
    </div>
  );
};
