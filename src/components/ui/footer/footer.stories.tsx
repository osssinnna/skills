import type { Meta, StoryObj } from "@storybook/react";
import { FooterUI } from "./footer";

/**
 * Storybook конфигурация для FooterUI
 */
const meta: Meta<typeof FooterUI> = {
  title: "Layout/Footer",
  component: FooterUI,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    links: [
      [
        { label: "О проекте", href: "/" },
        { label: "Все навыки", href: "/" },
      ],
      [
        { label: "Контакты", href: "/" },
        { label: "Блог", href: "/" },
      ],
      [
        { label: "Политика конфиденциальности", href: "/" },
        { label: "Пользовательское соглашение", href: "/" },
      ],
    ],
  },
};

export default meta;

type Story = StoryObj<typeof FooterUI>;

/**
 * Основное состояние футера
 */
export const Default: Story = {};

