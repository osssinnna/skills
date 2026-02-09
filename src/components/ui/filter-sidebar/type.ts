export type Props = {
  hasActiveFilters: boolean;
  onResetAll: () => void;
  activeTagsCount: number;
  modeFilter: React.ReactNode;
  skillsFilter: React.ReactNode;
  genderFilter: React.ReactNode;
  cityFilter: React.ReactNode;
};
