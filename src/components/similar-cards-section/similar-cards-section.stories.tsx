import type { Meta, StoryObj } from "@storybook/react";
import { SimilarCardsSection } from "../similar-cards-section/similar-cards-section";
import mockUsers from "../../mock/mockUser.json";

// Мокаем данные для Storybook
const typedUsers = mockUsers.map((user) => ({
  ...user,
  gender: user.gender as "Мужской" | "Женский",
}));

const meta: Meta<typeof SimilarCardsSection> = {
  title: "Components/SimilarCardsSection",
  component: SimilarCardsSection,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Секция для отображения похожих карточек пользователей. Всегда показывает 4 карточки и имеет кнопку 'Смотреть все' для перехода на главную страницу.",
      },
    },
  },
  argTypes: {
    title: {
      description: "Заголовок секции",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    users: {
      description: "Массив пользователей для отображения (показываются первые 4)",
      table: {
        type: { summary: "User[]" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SimilarCardsSection>;

// Базовое состояние компонента
export const Default: Story = {
  name: "Default",
  args: {
    title: "Похожие предложения",
    users: typedUsers,
  },
  parameters: {
    docs: {
      description: {
        story: "Стандартное состояние секции с несколькими пользователями.",
      },
    },
  },
};

// Состояние с менее чем 4 пользователями
export const FewUsers: Story = {
  name: "Few Users",
  args: {
    title: "Похожие предложения",
    users: typedUsers.slice(0, 3),
  },
  parameters: {
    docs: {
      description: {
        story: "Секция с менее чем 4 пользователями.",
      },
    },
  },
};

// Минимальное количество пользователей
export const Minimal: Story = {
  name: "Minimal Users",
  args: {
    title: "Похожие предложения",
    users: typedUsers.slice(0, 1),
  },
  parameters: {
    docs: {
      description: {
        story: "Секция с одним пользователем.",
      },
    },
  },
};

// Пустое состояние
export const Empty: Story = {
  name: "Empty State",
  args: {
    title: "Похожие предложения",
    users: [],
  },
  parameters: {
    docs: {
      description: {
        story: "Состояние, когда нет пользователей для отображения.",
      },
    },
  },
};

// С большим количеством пользователей
export const ManyUsers: Story = {
  name: "Many Users",
  args: {
    title: "Похожие предложения",
    users: [...typedUsers, ...typedUsers, ...typedUsers], // Много пользователей
  },
  parameters: {
    docs: {
      description: {
        story: "Секция с большим количеством пользователей (показываются только первые 4).",
      },
    },
  },
};