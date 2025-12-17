import type { Meta, StoryObj } from "@storybook/react";
import { PersonCard } from "./personCard";
import { mockPerson1, mockPerson2 } from "./mocks/personMocks";

const meta: Meta<typeof PersonCard> = {
  title: "Components/PersonCard",
  component: PersonCard,
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
      <div
        style={{
          // Темный фон, т.к. карточка белая
          backgroundColor: "#818181ff",
          padding: "100px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PersonCard>;

// заглушка
const noop = () => {};

export const Default: Story = {
  name: "PersonCard больше 2 тегов",
  args: {
    person: mockPerson1,
    onLikeToggle: noop,
  },
};

export const DifferentData: Story = {
  name: "PersonCard 2 тега",
  args: {
    person: mockPerson2,
    onLikeToggle: noop,
  },
};
