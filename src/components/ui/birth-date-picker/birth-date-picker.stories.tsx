import type { Meta, StoryObj } from "@storybook/react";
import { BirthDatePicker } from "./birth-date-picker";

const meta: Meta<typeof BirthDatePicker> = {
  title: "Components/ui/BirthDatePicker",
  component: BirthDatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Компонент выбора даты рождения с календарём и форматом dd.MM.yyyy",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BirthDatePicker>;

export const Default: Story = {
  name: "По умолчанию",
};

export const WithValue: Story = {
  name: "С выбранной датой",
  args: {
    value: new Date(1995, 9, 28),
  },
};
