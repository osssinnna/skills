// CardSection.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { CardSection } from "./card-section";
import mockUsers from "../../../mock/mockUser.json";

const typedUsers = mockUsers.map(user => ({
  ...user,
  gender: user.gender as 'Мужской' | 'Женский'
}));

const mockNavigation = (link: string) => {
  console.log('Навигация по ссылке:', link);
};

const meta: Meta<typeof CardSection> = {
  title: "Components/CardSection",
  component: CardSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Секция для отображения категории пользователей с ограниченным предпросмотром и возможностью просмотра всех.",
      },
    },
  },
  argTypes: {
    title: {
      description: "Заголовок секции",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    users: {
      description: "Массив пользователей для отображения в секции",
      table: {
        type: { summary: "User[]" },
      },
    },
    maxPreviewCount: {
      description: "Максимальное количество пользователей в режиме предпросмотра",
      control: { 
        type: "number", 
        min: 1, 
        max: 10,
        step: 1 
      },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" }, // Исправлено: строка вместо числа
      },
    },
    navigationTo: {
      action: "navigationTo",
      description: "Функция для навигации на страницу со всеми пользователями категории",
      table: {
        type: { summary: "(link: string) => void" },
      },
    },
  },
  tags: ["autodocs"],
  // Можно добавить значения по умолчанию для всех stories
  args: {
    title: "Категория пользователей",
    users: typedUsers.slice(0, 4),
    maxPreviewCount: 3,
    navigationTo: mockNavigation,
  },
};

export default meta;
type Story = StoryObj<typeof CardSection>;

// 🟦 Базовое состояние компонента
export const Default: Story = {
  // args наследуются из meta
};

// 🟥 Много пользователей
export const ManyUsers: Story = {
  args: {
    title: "Все пользователи",
    users: typedUsers,
    maxPreviewCount: 3,
  },
};

// 🟨 Мало пользователей
export const FewUsers: Story = {
  args: {
    title: "Музыканты",
    users: typedUsers.slice(0, 2),
    maxPreviewCount: 3,
  },
};

// 🟪 Пустое состояние
export const EmptyState: Story = {
  args: {
    title: "Пустая категория",
    users: [],
    maxPreviewCount: 3,
  },
};

// 🟫 Специфичное количество превью
export const WithTwoPreview: Story = {
  name: "Two Preview Cards",
  args: {
    title: "Дизайнеры",
    users: typedUsers,
    maxPreviewCount: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "Отображает только 2 карточки в режиме предпросмотра.",
      },
    },
  },
};

// 🌍 Пример с разными значениями maxPreviewCount
export const DifferentPreviewCounts: Story = {
  render: (args) => (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h3>maxPreviewCount = 1</h3>
        <CardSection {...args} maxPreviewCount={1} />
      </div>
      <div style={{ marginBottom: '32px' }}>
        <h3>maxPreviewCount = 2</h3>
        <CardSection {...args} maxPreviewCount={2} />
      </div>
      <div>
        <h3>maxPreviewCount = 4</h3>
        <CardSection {...args} maxPreviewCount={4} />
      </div>
    </div>
  ),
  args: {
    title: "Тест разных лимитов",
    users: typedUsers,
  },
};