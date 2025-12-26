import type { Meta, StoryObj } from "@storybook/react";
import { MessagesListUI } from "./messages-list";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux"; 


//  создадим тестовый стор чтобы не было ошибок в истории связ с dispatch и т.п.
const dummyReducer = (state = {}) => state; // редюсер заглушка

export const mockStore = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});

// Метаданные — настройки для Storybook
const meta: Meta<typeof MessagesListUI> = {
title: "Components/ui/MessageListUI", // название в боковом меню Storybook
component: MessagesListUI,
parameters: {
  layout: "centered", // По умолчанию компоненты центрируются
},
decorators: [
  (Story) => (
    <Provider store={mockStore}>
      <MemoryRouter>
        <Story/>
      </MemoryRouter>
    </Provider>
  )
],
argTypes: {
  title: { control: 'text'},
},
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof MessagesListUI>;

const today = new Date().toISOString();

export const viewedMessagesList: Story = {
 
  args: {
    title: 'Просмотренные',
    messages: [
        { userName:'Николай',
          userId: 12345,
          date: today,
          viewed: true,
          typeMessage:'confirmed',
      },
        { userName:'Татьяна',
          userId: 123456,
          date: '23.12.2025',
          viewed: true,
          typeMessage: 'offered',
      },
      ],
    onClick: () => {},
    textButton: 'Очистить'
    }
  }

  export const newMessagesList: Story = {
 
  args: {
    title: 'Новые уведомления',
    messages: [
        { userName:'Александр',
          userId: 12345,
          date: today,
          viewed: false,
          typeMessage:'confirmed',
      },
        { userName:'Олег',
          userId: 123456,
          date: today,
          viewed: false,
          typeMessage: 'offered',
      },
      ],
    onClick: () => {},
    textButton: 'Прочитать все'
    }
  }












