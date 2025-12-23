import type { Meta, StoryObj } from "@storybook/react";
import { CityFilter, FilterSidebarUI, GenderFilter, ModeFilter, SkillsFilterUI } from ".";

const meta: Meta<typeof FilterSidebarUI> = {
  title: "UI/FilterSidebar/Layout",
  component: FilterSidebarUI,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof FilterSidebarUI>;

const mockMode = <ModeFilter mode="all" onChange={() => {}} />;
const mockGender = <GenderFilter gender={null} onChange={() => {}} />;
const mockCities = (
  <CityFilter
    cities={["Москва", "Санкт-Петербург", "Новосибирск"]}
    selectedCity="Москва"
    onChange={() => {}}
    showAll={false}
    onToggleShowAll={() => {}}
  />
);
const mockSkills = (
  <SkillsFilterUI
    categories={[]}
    hasMore={false}
    showAll={false}
    totalCategories={0}
    onToggleShowAll={() => {}}
  />
);

export const Default: Story = {
  args: {
    modeFilter: mockMode,
    genderFilter: mockGender,
    cityFilter: mockCities,
    skillsFilter: mockSkills,
  },
};
