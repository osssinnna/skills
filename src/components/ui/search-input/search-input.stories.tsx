import type { Meta, StoryObj } from "@storybook/react";
import { SearchInputUI } from "./search-input";

const meta: Meta<typeof SearchInputUI> = {
  title: "Components/ui/SearchInputUI",
  component: SearchInputUI,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент поисковой строки с иконкой поиска и кнопкой очистки.",
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      description: "Текущее значение в поле поиска",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "''" },
      },
    },
    onChange: {
      action: "changed",
      description: "Функция, вызываемая при изменении текста",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    onClear: {
      action: "cleared",
      description: "Функция, вызываемая при нажатии на крестик",
      table: {
        type: { summary: "() => void" },
      },
    },
    placeholder: {
      control: "text",
      description: "Текст placeholder",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "'Поиск'" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchInputUI>;

// Пустое состояние
export const Default: Story = {
  name: "Default SearchInput",
  args: {
    value: "",
    placeholder: "Поиск навыков...",
  },
  parameters: {
    docs: {
      description: {
        story: "Поисковая строка в пустом состоянии",
      },
    },
  },
};

// С текстом (показывается крестик)
export const WithText: Story = {
  name: "SearchInput with text",
  args: {
    value: "Frontend разработчик",
    placeholder: "Поиск навыков...",
  },
  parameters: {
    docs: {
      description: {
        story: "Поисковая строка с текстом - отображается кнопка очистки",
      },
    },
  },
};

// С длинным текстом
export const WithLongText: Story = {
  name: "SearchInput with long text",
  args: {
    value: "Senior JavaScript разработчик с опытом работы от 5 лет",
    placeholder: "Поиск навыков...",
  },
  parameters: {
    docs: {
      description: {
        story: "Поисковая строка с длинным текстом",
      },
    },
  },
};

// Кастомный placeholder
export const CustomPlaceholder: Story = {
  name: "SearchInput with custom placeholder",
  args: {
    value: "",
    placeholder: "Искать навык",
  },
  parameters: {
    docs: {
      description: {
        story: "Поисковая строка с пользовательским placeholder",
      },
    },
  },
};
