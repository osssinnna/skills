import type { Meta, StoryObj } from "@storybook/react";
import { IconButtonUI } from "./IconButtonUI";
import iconLike from '../../../assets/icon-like.svg'
import iconLikeFilled from '../../../assets/icon-like-filled.svg';

const meta: Meta<typeof IconButtonUI> = {
    title: "Components/ui/IconButtonUI",
    component: IconButtonUI,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Кнопка с иконкой для лайков. Поддерживает два состояния (активное и неактивное).",
            },
        },
    },
    argTypes: {
        isActive: {
            control: "boolean",
            description: "Активно ли состояние кнопки?",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        onClick: {
            action: "clicked",
            description: "Функция, которая вызывается при клике",
            table: {
                type: { summary: "() => void" },
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButtonUI>;

// базовое состояние компонента (прозрачное сердечко)
export const DefaultIconButton: Story = {
    name: "Default IconButton",
    args: {
        isActive: false,
        icon: iconLike,
        iconActive: iconLikeFilled,
    },
    parameters: {
        docs: {
            description: {
                story: "Кнопка лайка в неактивном состоянии",
            },
        },
    },
};

// компонент в активном состоянии (зеленое сердечко)
export const ActiveIconButton: Story = {
    name: "Active IconButton",
    args: {
        isActive: true,
        icon: iconLike,
        iconActive: iconLikeFilled,
    },
    parameters: {
        docs: {
            description: {
                story: "Кнопка лайка в активном состоянии",
            },
        },
    },
};