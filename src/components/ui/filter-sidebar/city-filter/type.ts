export type Props = {
  cities: string[];
  visibleCities: string[];
  showAll: boolean;
  selectedCity: string | null;
  onChange: (city: string | null) => void;
  onToggleShowAll: () => void;
};
