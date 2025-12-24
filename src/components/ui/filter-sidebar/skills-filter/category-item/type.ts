import type { Category, Subcategory } from "../../../../../utils/types";

export type CategoryItemProps = {
  category: Category & { subcategories: Subcategory[] };
  selectedCount: number;
  total: number;
  expanded: boolean;
  onToggleExpand: () => void;
  onToggleCategory: () => void;
  selectedIds: string[];
  onToggleSub: (id: string) => void;
};
