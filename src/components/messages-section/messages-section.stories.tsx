import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MessagesSection } from "./messages-section";
import { useEffect, useRef, useState, type FC } from "react";
import { AppHeaderUI } from "../ui/app-header";
import { ButtonUI } from "../ui/button";
import messagesReducer from "../../services/messagesSlice/messagesSlice";
//  создадим тестовый стор чтобы не было ошибок в истории связ с dispatch и т.п.
const dummyReducer = (state = {}) => state; // редюсер заглушка

const mockStore = configureStore({
  reducer: {
    messages: messagesReducer,
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
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
};
export default meta;

// Создаём тип для истории - гарантия соотв пропсам комп-та
type Story = StoryObj<typeof MessagesSection>;

const today = new Date().toISOString();

const TestStory: FC = () => {
  return (
    <>
      <AppHeaderUI userName="Алексей" userAvatar="" isAuth={true} />
      <MessagesSection />
    </>
  );
};

export const WithStoryTestOpenAndClose: FC = () => {
  const [isShow, setShow] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const [focusedElement, setFocusedElement] = useState<string | null>(null);
  const [isToggleBtn, setToggleBtn] = useState(false);
  const handleClick = () => {
    setShow(!isShow);
    setToggleBtn(!isToggleBtn);
    setTimeout(() => {
      setFocusedElement(document.activeElement?.tagName ?? null);
    }, 0);
  };
  useEffect(() => {
    const handleFocusChange = () => {
      setFocusedElement(document.activeElement?.tagName ?? null);
    };
    const timer = setTimeout(() => handleFocusChange);

    window.addEventListener("focusin", handleFocusChange);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("focusin", handleFocusChange);
    };
  }, []);
  //  сихронизируем переключение кнопки и наличие/отсутствие секции
  useEffect(() => {
    if (!isToggleBtn && !document.body.contains(divRef.current)) {
      setTimeout(() => setShow(false));
    }
  }, [isToggleBtn]);
  return (
    <>
      <div>
        <h2>Закрытие по Escp, клику вне секции и проверка фокуса</h2>
        <p>Текущий сфокусированный элемент {focusedElement}</p>
      </div>
      <ButtonUI onClick={handleClick} color="primary">
        {!isToggleBtn ? "Показать уведомления" : "Скрыть уведомления"}
      </ButtonUI>
      {isShow ? (
        <div ref={divRef}>
          <MessagesSection />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export const sectionMessages: Story = {
  args: {
    unreadMessages: [
      {
        userName: "Александр",
        userId: 12345,
        date: today,
        viewed: false,
        typeMessage: "confirmed",
      },
      {
        userName: "Олег",
        userId: 123456,
        date: today,
        viewed: false,
        typeMessage: "offered",
      },
    ],
    readMessages: [
      {
        userName: "Николай",
        userId: 12345,
        date: today,
        viewed: true,
        typeMessage: "confirmed",
      },
      {
        userName: "Татьяна",
        userId: 123456,
        date: "23.12.2025",
        viewed: true,
        typeMessage: "offered",
      },
    ],
  },
};

export const withHeader: Story = {
  render: () => <TestStory />,
};
