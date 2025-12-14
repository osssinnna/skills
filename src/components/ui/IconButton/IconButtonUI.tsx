import type { TIconButtonUIPropsUI } from "./type";
import type { FC } from "react";
import styles from "./IconButtonUI.module.css";

export const IconButtonUI: FC<TIconButtonUIPropsUI> = ({
    icon,
    iconActive,
    isActive = false,
    onClick
}) => {
    const currentIcon = (isActive && iconActive) ? iconActive : icon;

    return (
        <button
            className={styles.button}
            onClick={onClick}
            type="button"
        >
            <img 
                src={currentIcon} 
                alt=""
                className={styles.icon}
                aria-hidden="true"
            />
        </button>
    );
};