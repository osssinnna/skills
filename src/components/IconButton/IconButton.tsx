import type { FC } from "react";
import { IconButtonUI } from "../ui/IconButton/IconButtonUI";
import type { TIconButtonProps } from "./IconButton.types";
import iconLike from '../../assets/icon-like.svg';
import iconLikeFilled from '../../assets/icon-like-filled.svg';

export const IconButton: FC<TIconButtonProps> = ({
    icon,
    iconActive,
    isActive = false,
    onClick
}) => {
    const finalIcon = icon || iconLike;
    const finalIconActive = iconActive || iconLikeFilled;

    return (
        <IconButtonUI
            icon={finalIcon}
            iconActive={finalIconActive}
            isActive={isActive}
            onClick={onClick}
        />
    );
};