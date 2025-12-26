import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { MessagesSectionUI } from "./messages-section";
import {unreadTestMessages , readTestMessages} from './mock-data';

//  создадим тестовый стор чтобы не было ошибок в истории связ с dispatch и т.п.
const dummyReducer = (state = {}) => state; // редюсер заглушка

const mockStore = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});

// Метаданные — настройки для Storybook
const meta: Meta<typeof MessagesSectionUI> = {
title: "Components/ui/MessagesSectionUI", // название в боковом меню Storybook
component: MessagesSectionUI,
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
type Story =StoryObj<typeof MessagesSectionUI>;



export const sectionMessages: Story = {
 
  args: {
    unreadMessages: unreadTestMessages,
    readMessages: readTestMessages,
    isVisible: true
    }
  }













