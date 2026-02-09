import type { Meta, StoryObj } from "@storybook/react";
import { CityFilter } from ".";

const meta: Meta<typeof CityFilter> = {
  title: "UI/FilterSidebar/CityFilter",
  component: CityFilter,
};

export default meta;
type Story = StoryObj<typeof CityFilter>;

const cities = ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург", "Новосибирск"];

export const FewCities: Story = {
  args: {
    cities: cities.slice(0, 3),
    selectedCity: "Москва",
    onChange: () => {},
    showAll: false,
    onToggleShowAll: () => {},
  },
};

export const ManyCitiesHidden: Story = {
  args: {
    cities,
    selectedCity: null,
    onChange: () => {},
    showAll: false,
    onToggleShowAll: () => {},
  },
};

export const ManyCitiesShown: Story = {
  args: {
    cities,
    selectedCity: "Казань",
    onChange: () => {},
    showAll: true,
    onToggleShowAll: () => {},
  },
};
