import type { Meta, StoryObj } from "@storybook/react";
import { PersonCardExpanded } from "./userCardExpanded";
import { mockPerson1 } from "./mocks/personMocks";

const meta: Meta<typeof PersonCardExpanded> = {
  title: "Components/UserCardExpanded",
  component: PersonCardExpanded,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PersonCardExpanded>;

const noop = () => {};

export const Default: Story = {
  args: {
    person: mockPerson1,
    onLikeToggle: noop,
    onShareToggle: noop,
  },
};
