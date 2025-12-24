import type { FilterMode } from "../../../filter-sidebar/types";

export type Props = {
  mode: FilterMode;
  onChange: (mode: FilterMode) => void;
};
