import type { Meta, StoryObj } from "@storybook/react";
import { ModeFilter } from ".";

const meta: Meta<typeof ModeFilter> = {
  title: "UI/FilterSidebar/ModeFilter",
  component: ModeFilter,
};

export default meta;
type Story = StoryObj<typeof ModeFilter>;

export const All: Story = { args: { mode: "all", onChange: () => {} } };
export const WantToLearn: Story = { args: { mode: "wantToLearn", onChange: () => {} } };
export const CanTeach: Story = { args: { mode: "canTeach", onChange: () => {} } };
