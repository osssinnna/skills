import type { Meta, StoryObj } from "@storybook/react";
import { ToastNotifyUI } from './index';
import { MemoryRouter } from "react-router-dom";

// Метаданные — настройки для Storybook
const meta: Meta<typeof ToastNotifyUI > = {
title: "Components/ui/ToastNotifyUI ", // название в боковом меню Storybook
component: ToastNotifyUI ,
parameters: {
  layout: "centered", // По умолчанию компоненты центрируются
},
decorators: [
  (Story) => (
    <MemoryRouter>
      <Story/>
    </MemoryRouter>
  ),
],
argTypes: {
  name:{
    control: 'text',
  },
  text: {
    control: 'text',
  },
  icon: {
    control: 'text'
  },
  onClose: {
    action: 'closed',
    description: 'Функция закрытия уведомления'
  }
},
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof ToastNotifyUI>;
//  дефолт
export const DefaultToastUI: Story = {
  args: {
    name: 'Алексей',
    id: 12345,
    path:'exchanges',
    isShowToastAnim: true
  }
};


