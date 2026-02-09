import type { Meta, StoryObj } from "@storybook/react";

import { AppHeaderUI } from "./app-header";

/**
 * Storybook конфигурация для AppHeaderUI
 */
const meta: Meta<typeof AppHeaderUI> = {
  title: "Layout/AppHeader",
  component: AppHeaderUI,
  parameters: {
    layout: "fullscreen",
  },
  // Дефолтные пропсы для всех стори (можно переопределять в конкретных стори)
  args: {
    userName: "Алексей",
    userAvatar: "",
    isAuthOverride: true, // по умолчанию показываем авторизованный вид
  },
};

export default meta;

type Story = StoryObj<typeof AppHeaderUI>;

/**
 * Авторизованный пользователь без аватара (основное состояние)
 */
export const Authorized: Story = {
  args: {
    userName: "Алексей",
    userAvatar: "",
    isAuthOverride: true,
  },
};

/**
 * Авторизованный пользователь с аватаром
 */
export const AuthorizedWithAvatar: Story = {
  args: {
    userName: "Алексей",
    userAvatar: "https://i.pravatar.cc/96?img=3",
    isAuthOverride: true,
  },
};

/**
 * Неавторизованный пользователь
 */
export const Unauthorized: Story = {
  args: {
    userName: "", // можно оставить пустым или вообще не передавать — но для ясности укажем
    userAvatar: "",
    isAuthOverride: false,
  },
};
