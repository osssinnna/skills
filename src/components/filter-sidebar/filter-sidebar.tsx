import { useState } from "react";
import type { Filters, FilterSidebarProps } from "./types";
import {
  CityFilter,
  FilterSidebarUI,
  GenderFilter,
  ModeFilter,
} from "../ui/filter-sidebar";
import { SkillsFilter } from "./skills-filter";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters, setFilters } from "../../services/usersSlice/usersSlice";
import { selectHasActiveFilters } from "../../services/usersSlice/selectors";
import { selectActiveFilterTags } from "../../services/filterSelectors/filterSelectors";

export const FilterSidebar = ({
  filters,
  categoriesTree,
  cities,
}: FilterSidebarProps) => {
  const [showAllCities, setShowAllCities] = useState(false);

  const dispatch = useDispatch();
  const activeTags = useSelector(selectActiveFilterTags);
  const activeTagsCount = activeTags.length;

  const update = (patch: Partial<Filters>) => {
    dispatch(setFilters(patch));
  };

  const handleResetAll = () => {
    dispatch(resetFilters());
  };

  const sortedCities = [...cities].sort((a, b) => a.localeCompare(b));
  const visibleCities = showAllCities ? cities : cities.slice(0, 3);
  const hasActiveFilters = useSelector(selectHasActiveFilters);

  return (
    <FilterSidebarUI
      onResetAll={handleResetAll}
      hasActiveFilters={hasActiveFilters}
      activeTagsCount={activeTagsCount}
      modeFilter={
        <ModeFilter mode={filters.mode} onChange={(mode) => update({ mode })} />
      }
      skillsFilter={
        <SkillsFilter
          categoriesTree={categoriesTree}
          selectedIds={filters.subcategoryIds}
          onChange={(subcategoryIds) =>
            update({
              subcategoryIds,
              categoryIds: [],
            })
          }
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
          visibleCities={visibleCities}
          showAll={showAllCities}
          onToggleShowAll={() => setShowAllCities((prev) => !prev)}
        />
      }
    />
  );
};
