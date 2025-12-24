import { useState } from "react";
import type { Filters, FilterSidebarProps } from "./types";
import {
  CityFilter,
  FilterSidebarUI,
  GenderFilter,
  ModeFilter,
} from "../ui/filter-sidebar";
import { SkillsFilter } from "./skills-filter";

export const FilterSidebar = ({
  filters,
  onChange,
  categoriesTree,
  cities,
}: FilterSidebarProps) => {
  const [showAllCities, setShowAllCities] = useState(false);

  const update = (patch: Partial<Filters>) => {
    onChange({ ...filters, ...patch });
  };

  const sortedCities = [...cities].sort((a, b) => a.localeCompare(b));

  return (
    <FilterSidebarUI
      modeFilter={
        <ModeFilter mode={filters.mode} onChange={(mode) => update({ mode })} />
      }
      skillsFilter={
        <SkillsFilter
          categoriesTree={categoriesTree}
          selectedIds={filters.skillIds}
          onChange={(skillIds) => update({ skillIds })}
        />
      }
      genderFilter={
        <GenderFilter gender={filters.gender} onChange={(gender) => update({ gender })} />
      }
      cityFilter={
        <CityFilter
          cities={sortedCities}
          selectedCity={filters.city}
          onChange={(city) => update({ city })}
          showAll={showAllCities}
          onToggleShowAll={() => setShowAllCities((prev) => !prev)}
        />
      }
    />
  );
};
