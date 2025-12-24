import type { Meta, StoryObj } from "@storybook/react";
import { GenderFilter } from ".";

const meta: Meta<typeof GenderFilter> = {
  title: "UI/FilterSidebar/GenderFilter",
  component: GenderFilter,
};

export default meta;
type Story = StoryObj<typeof GenderFilter>;

export const Any: Story = { args: { gender: null, onChange: () => {} } };
export const Male: Story = { args: { gender: "Мужской", onChange: () => {} } };
export const Female: Story = { args: { gender: "Женский", onChange: () => {} } };
