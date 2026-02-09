import type { Meta, StoryObj } from "@storybook/react";
import { CategoryItem } from ".";

const meta: Meta<typeof CategoryItem> = {
  title: "UI/FilterSidebar/Skills/CategoryItem",
  component: CategoryItem,
};

export default meta;
type Story = StoryObj<typeof CategoryItem>;

const mockCategory = {
  id: "1",
  name: "Программирование",
  subcategories: [
    { id: "1-1", name: "JavaScript", categoryId: "1" },
    { id: "1-2", name: "TypeScript", categoryId: "1" },
    { id: "1-3", name: "React", categoryId: "1" },
  ],
};

export const CollapsedNoneSelected: Story = {
  args: {
    category: mockCategory,
    selectedCount: 0,
    total: 3,
    expanded: false,
    selectedIds: [],
    onToggleExpand: () => {},
    onToggleCategory: () => {},
    onToggleSub: () => {},
  },
};

export const ExpandedSomeSelected: Story = {
  args: {
    ...CollapsedNoneSelected.args,
    expanded: true,
    selectedCount: 2,
    selectedIds: ["1-1", "1-3"],
  },
};

export const AllSelected: Story = {
  args: {
    ...CollapsedNoneSelected.args,
    selectedCount: 3,
    selectedIds: ["1-1", "1-2", "1-3"],
  },
};

export const Indeterminate: Story = {
  args: {
    ...CollapsedNoneSelected.args,
    selectedCount: 1,
    selectedIds: ["1-2"],
  },
};
