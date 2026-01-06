import { useState } from "react";
import { CategoryItem, SkillsFilterUI } from "../../ui/filter-sidebar";
import type { Category, Subcategory } from "../../../utils/types";

export type SkillsFilterProps = {
  categoriesTree: (Category & { subcategories: Subcategory[] })[];
  selectedIds: number[];
  onChange: (ids: number[]) => void;
};

export const SkillsFilter = ({
  categoriesTree,
  selectedIds,
  onChange,
}: SkillsFilterProps) => {
  const [expanded, setExpanded] = useState<number[]>([]);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleSubcategory = (id: number) => {
    onChange(
      selectedIds.includes(id)
        ? selectedIds.filter((x) => x !== id)
        : [...selectedIds, id]
    );
  };

  const toggleCategory = (subs: Subcategory[]) => {
    const subIds = subs.map((s) => s.id);
    const allSelected = subIds.every((id) => selectedIds.includes(id));
    onChange(
      allSelected
        ? selectedIds.filter((id) => !subIds.includes(id))
        : Array.from(new Set([...selectedIds, ...subIds]))
    );
  };

  const visibleCategories = showAllCategories
    ? categoriesTree
    : categoriesTree.slice(0, 6);

  return (
    <SkillsFilterUI
      categories={visibleCategories.map((cat) => {
        const subIds = cat.subcategories.map((s) => s.id);
        const selectedCount = subIds.filter((id) => selectedIds.includes(id)).length;

        return (
          <CategoryItem
            key={cat.id}
            category={cat}
            selectedCount={selectedCount}
            total={subIds.length}
            expanded={expanded.includes(cat.id)}
            onToggleExpand={() =>
              setExpanded((prev) =>
                prev.includes(cat.id)
                  ? prev.filter((x) => x !== cat.id)
                  : [...prev, cat.id]
              )
            }
            onToggleCategory={() => toggleCategory(cat.subcategories)}
            selectedIds={selectedIds}
            onToggleSub={toggleSubcategory}
          />
        );
      })}
      hasMore={categoriesTree.length > 6}
      showAll={showAllCategories}
      onToggleShowAll={() => setShowAllCategories((prev) => !prev)}
    />
  );
};
