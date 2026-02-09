import type { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "./userCard";
import { mockPerson1, mockPerson2 } from "./mocks/personMocks";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../services/store";

const meta: Meta<typeof UserCard> = {
  title: "Components/PersonCard",
  component: UserCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент карточки человека. Содержит информацию о пользователе, его навыки и позволяет ставить лайки",
      },
    },
  },
  argTypes: {
    onLikeToggle: {
      action: "clicked",
      description: "Коллбэк при клике на лайк",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <div
            style={{
              backgroundColor: "#818181ff",
              padding: "100px",
            }}
          >
            <Story />
          </div>
        </MemoryRouter>
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UserCard>;

// заглушка
const noop = () => {};

export const Default: Story = {
  name: "PersonCard больше 2 тегов",
  args: {
    user: mockPerson1,
    onLikeToggle: noop,
  },
  render: (args) => (
    <MemoryRouter>
      <UserCard {...args} />
    </MemoryRouter>
  ),
};

export const DifferentData: Story = {
  name: "PersonCard 2 тега",
  args: {
    user: mockPerson2,
    onLikeToggle: noop,
  },
  render: (args) => (
    <MemoryRouter>
      <UserCard {...args} />
    </MemoryRouter>
  ),
};
