import type { FC } from "react";
import styles from "./checkbox.module.css";

import emptySquare from "./assets/images/emptySquare.svg";
import checkedSquare from "./assets/images/checkedSquare.svg";
import emptyRound from "./assets/images/emptyRoundCheckBox.svg";
import checkedRound from "./assets/images/checkedRound.svg";
import mainAccordion from "./assets/images/mainChecboxSquare.svg";
import { IconButtonUI } from "../iconButton";

export type CheckboxUIProps = {
  id: string;
  label: string;

  checked: boolean;
  onChange: (checked: boolean) => void;

  type?: "checkbox" | "radio";
  name?: string;

  variant?: "square" | "round" | "accordion";
  disabled?: boolean;
};

const ICONS = {
  square: {
    empty: emptySquare,
    checked: checkedSquare,
  },
  round: {
    empty: emptyRound,
    checked: checkedRound,
  },
  accordion: {
    empty: emptySquare,
    checked: mainAccordion,
  },
};

export const CheckBoxUI: FC<CheckboxUIProps> = ({
  id,
  label,
  checked,
  onChange,
  type = "checkbox",
  name,
  variant = "square",
  disabled = false,
}) => {
  const icons = ICONS[variant];

  return (
    <label className={styles.label} aria-disabled={disabled}>
      <input
        id={id}
        type={type}
        name={name}
        checked={checked}
        disabled={disabled}
        className={styles.visuallyHidden}
        onChange={(e) => onChange(e.target.checked)}
      />

      <IconButtonUI
        icon={icons.empty}
        iconActive={icons.checked}
        isActive={checked}
      />

      <span className={styles.text}>{label}</span>
    </label>
  );
};
