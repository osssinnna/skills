import type { FC, ReactNode } from "react";
import styles from "./button.module.css";
import clsx from "clsx";

type TButtonUIProps = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  color: "primary" | "secondary";
  fullSize?: boolean;
  disabledToggle?: boolean;
  onClick?: () => void;
};

export const ButtonUI: FC<TButtonUIProps> = ({
  type = "button",
  children,
  color,
  fullSize = false,
  disabledToggle = false,
  onClick,
}) => {
  const className = clsx(
    styles.button,
    color === "primary" ? styles.buttonPrimary : styles.buttonSecondary,
    fullSize ? styles.buttonFullSize : ""
  );
  return (
    <button type={type} onClick={onClick} disabled={disabledToggle} className={className}>
      {children}
    </button>
  );
};
