import type { User } from "../../../../utils/types";

export type Props = {
  values: {
    name: string;
    location: string;
    birthDate: Date | null;
    gender: User["gender"];
  };

  errors: Partial<Record<"name" | "location" | "birthDate" | "gender", string>>;
  categoriesError: string | null;
  categories: CategoryWithSubs[];
  isLoading: boolean;
  formError: string;

  selectedCategoryIds: string[];
  selectedSubcategoryIds: string[];

  onChange: (
    field: "name" | "location" | "gender",
    value: string,
    validate?: boolean
  ) => void;
  onBirthDateChange: (date: Date | null) => void;

  onCategoriesChange: (ids: string[]) => void;
  onSubcategoriesChange: (ids: string[]) => void;

  onSubmit: () => void;
  onBack: () => void;
};

export type CategoryWithSubs = {
  id: string;
  name: string;
  subcategories: {
    id: string;
    name: string;
  }[];
};
