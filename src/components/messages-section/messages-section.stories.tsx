import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { MessagesSection } from "./messages-section";
import {AppHeader} from '../app-header/';
import type { FC } from "react";

//  создадим тестовый стор чтобы не было ошибок в истории связ с dispatch и т.п.
const dummyReducer = (state = {}) => state; // редюсер заглушка

const mockStore = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});

// Метаданные — настройки для Storybook
const meta: Meta<typeof MessagesSection> = {
title: "Components/MessagesSection", // название в боковом меню Storybook
component: MessagesSection,
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
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story =StoryObj<typeof MessagesSection>;

const today = new Date().toISOString();

const TestStory:FC = () => {


  return <>
            <AppHeader/>
            <MessagesSection/>
        </>
}


export const sectionMessages: Story = {
 
  args: {
    unreadMessages: [
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
    readMessages: [
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
    ]
    }
  }

  export const withHeader: Story = {
    render: () => <TestStory />,
  }













