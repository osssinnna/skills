import type { Meta, StoryObj } from "@storybook/react";
import { LogoUI } from "./logo";

// Метаданные — настройки для Storybook
const meta: Meta<typeof LogoUI> = {
title: "Components/ui/LogoUI", // название в боковом меню Storybook
component: LogoUI,
parameters: {
layout: "centered", // По умолчанию компоненты центрируются
},
argTypes: {},
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof LogoUI>;
//  дефолт
export const DefaultLogo: Story = {
  args: {

  }
};


