import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
    title: "Components/IconButton",
    component: IconButton,
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
type Story = StoryObj<typeof IconButton>;

// базовое состояние компонента (прозрачное сердечко)
export const DefaultIconButton: Story = {
    name: "Default IconButton",
    args: {
        isActive: false,
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
    },
    parameters: {
        docs: {
            description: {
                story: "Кнопка лайка в активном состоянии",
            },
        },
    },
};