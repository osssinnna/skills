import type { TIconButtonUIPropsUI } from "../ui/IconButton/type";

export type TIconButtonProps = Omit<TIconButtonUIPropsUI, 'icon' | 'iconActive'> & {
    icon?: string;
    iconActive?: string;
};