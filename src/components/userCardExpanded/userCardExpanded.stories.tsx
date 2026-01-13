import type { Meta, StoryObj } from "@storybook/react";
import { UserCardExpanded } from "./userCardExpanded";
import { mockUser1, mockUser2 } from "./mocks/userMocks";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof UserCardExpanded> = {
  title: "Components/UserCardExpanded",
  component: UserCardExpanded,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Расширенная карточка пользователя с возможностью лайка, просмотра галереи и тегов навыков.",
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
    (Story) => <MemoryRouter><Story /></MemoryRouter>],
};

export default meta;
type Story = StoryObj<typeof UserCardExpanded>;

const noop = () => {};

export const Default: Story = {
  args: {
    user: mockUser1,
    onLikeToggle: noop,
  },
};

export const DifferentData: Story = {
  args: {
    user: mockUser2,
    onLikeToggle: noop,
  },
};
