import { useState } from "react";
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale";
import type { Month } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./birth-date-picker.module.css";

type BirthDatePickerProps = {
  value?: Date;
  onChange?: (date: Date) => void;
};

const MONTHS: Month[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 100 }, (_, i) => CURRENT_YEAR - i);

export const BirthDatePicker = ({ value, onChange }: BirthDatePickerProps) => {
  const [internalDate, setInternalDate] = useState<Date | undefined>(value);

  const handleChange = (date: Date | null) => {
    if (!date) return;
    setInternalDate(date);
    onChange?.(date);
  };

  return (
    <DatePicker
      selected={internalDate}
      onChange={handleChange}
      locale={ru}
      dateFormat="dd.MM.yyyy"
      placeholderText="дд.мм.гггг"
      calendarStartDay={1}
      showPopperArrow={false}
      className={styles.input}
      popperClassName={styles.popper}
      /* ❗ полностью кастомный header */
      renderCustomHeader={({ date, changeMonth, changeYear }) => (
        <div className={styles.header}>
          {/* месяц */}
          <select
            className={styles.select}
            value={date.getMonth()}
            onChange={(e) => changeMonth(Number(e.target.value))}
          >
            {MONTHS.map((month) => (
              <option key={month} value={month}>
                {ru.localize?.month(month)}
              </option>
            ))}
          </select>

          {/* год (скролл, видно ~12) */}
          <select
            className={`${styles.select} ${styles.yearSelect}`}
            value={date.getFullYear()}
            onChange={(e) => changeYear(Number(e.target.value))}
          >
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      )}
    />
  );
};
