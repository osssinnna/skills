export type Props = {
  cities: string[];
  selectedCity: string | null;
  onChange: (city: string | null) => void;
  showAll: boolean;
  onToggleShowAll: () => void;
};
