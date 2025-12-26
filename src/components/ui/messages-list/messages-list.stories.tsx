import type { Meta, StoryObj } from "@storybook/react";
import { MessagesListUI } from "./messages-list";
import { MemoryRouter } from "react-router-dom";


// Метаданные — настройки для Storybook
const meta: Meta<typeof MessagesListUI> = {
title: "Components/ui/MessageListUI", // название в боковом меню Storybook
component: MessagesListUI,
parameters: {
  layout: "centered", // По умолчанию компоненты центрируются
},
decorators: [
  (Story) => (
    <MemoryRouter>
      <Story/>
    </MemoryRouter>
  )
],
argTypes: {
  title: { control: 'text'},
},
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof MessagesListUI>;

export const viewedMessagesList: Story = {
 
  args: {
    title: 'Просмотренные',
    messages: [
        { userName:'Николай',
          userId: 12345,
          date: 'Вчера',
          viewed: true,
          typeMessage:'confirmed',
      },
        { userName:'Татьяна',
          userId: 123456,
          date: '24 декабря',
          viewed: true,
          typeMessage: 'offered',
      },
      ],
    onClick: () => {},
    textButton: 'очистить'
    }
  }

  export const newMessagesList: Story = {
 
  args: {
    title: 'Новые уведомления',
    messages: [
        { userName:'Николай',
          userId: 12345,
          date: 'Сегодня',
          viewed: false,
          typeMessage:'confirmed',
      },
        { userName:'Татьяна',
          userId: 123456,
          date: 'Сегодня',
          viewed: false,
          typeMessage: 'offered',
      },
      ],
    onClick: () => {},
    textButton: 'Почитать все'
    }
  }












