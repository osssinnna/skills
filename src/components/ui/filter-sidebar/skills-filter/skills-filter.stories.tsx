import type { Meta, StoryObj } from "@storybook/react";
import { CategoryItem, SkillsFilterUI } from ".";

const meta: Meta<typeof SkillsFilterUI> = {
  title: "UI/FilterSidebar/Skills/SkillsFilterUI",
  component: SkillsFilterUI,
};

export default meta;
type Story = StoryObj<typeof SkillsFilterUI>;

const mockCategories = [
  <CategoryItem
    key="1"
    category={{
      id: "1",
      name: "Дизайн",
      subcategories: [
        { id: "d1", name: "Figma", categoryId: "1" },
        { id: "d2", name: "Photoshop", categoryId: "1" },
      ],
    }}
    selectedCount={1}
    total={2}
    expanded={true}
    selectedIds={["d1"]}
    onToggleExpand={() => {}}
    onToggleCategory={() => {}}
    onToggleSub={() => {}}
  />,
  <CategoryItem
    key="2"
    category={{
      id: "2",
      name: "Языки",
      subcategories: [{ id: "l1", name: "Английский", categoryId: "2" }],
    }}
    selectedCount={0}
    total={1}
    expanded={false}
    selectedIds={[]}
    onToggleExpand={() => {}}
    onToggleCategory={() => {}}
    onToggleSub={() => {}}
  />,
];

export const Default: Story = {
  args: {
    categories: mockCategories,
    hasMore: true,
    showAll: false,
    totalCategories: 12,
    onToggleShowAll: () => {},
  },
};

export const ShowAll: Story = {
  args: {
    ...Default.args,
    showAll: true,
  },
};

export const NoMoreButton: Story = {
  args: {
    categories: mockCategories,
    hasMore: false,
    showAll: false,
    totalCategories: 5,
    onToggleShowAll: () => {},
  },
};
