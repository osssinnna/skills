import { type FC } from "react";
import emptySquare from "./assets/images/emptySquare.svg";
import checkedSquare from "./assets/images/checkedSquare.svg";
import emptyRound from "./assets/images/emptyRoundCheckBox.svg";
import checkedRound from "./assets/images/checkedRound.svg";
import mainAccordion from "./assets/images/mainChecboxSquare.svg";
import { IconButtonUI } from "../iconButton/iconButton";
import styles from "./checkbox.module.css";

export type CheckboxProps = {
  label: string; //- текст
  isActive: boolean; //- состояние активности передающееся в IconButton
  onChange: (id: string) => void | (() => void); //- функция для изменения состояния передающаяся в IconButton
  variant?: "square" | "round" | "accordion";
  groupName?: string;
  id: string;
};

export const CheckBoxUI: FC<CheckboxProps> = ({
  label,
  isActive,
  onChange,
  variant = "square",
  groupName,
  id,
}) => {
  const checkBoxData = {
    empty: "",
    checked: "",
  };

  if (variant === "square") {
    checkBoxData.empty = emptySquare;
    checkBoxData.checked = checkedSquare;
  }
  if (variant === "round") {
    checkBoxData.empty = emptyRound;
    checkBoxData.checked = checkedRound;
  }
  if (variant === "accordion") {
    checkBoxData.empty = emptySquare;
    checkBoxData.checked = mainAccordion;
  }

  return (
    <>
      <label className={styles.labelCheckbox}>
        <input
          type="checkbox"
          name={groupName}
          value={label}
          className={`${styles.visuallyHidden} ${styles.checkbox}`}
          onChange={() => onChange(id)}
        />
        <IconButtonUI
          isActive={isActive}
          icon={checkBoxData.empty}
          iconActive={checkBoxData.checked}
        />

        <span className={styles.checkboxName}>{label}</span>
      </label>
    </>
  );
};
