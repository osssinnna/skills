export type Props = {
  values: {
    name: string;
    location: string;
    birthDate: Date | null;
    gender: "Мужской" | "Женский" | "Не указан";
    avatarUrl: string;
  };

  errors: Partial<
    Record<"name" | "location" | "birthDate" | "gender" | "avatarUrl", string>
  >;
  categoriesError: string | null;
  categories: CategoryWithSubs[];
  isLoading: boolean;
  formError: string;

  selectedCategoryIds: number[];
  selectedSubcategoryIds: number[];

  onChange: (
    field: "name" | "location" | "gender" | "avatarUrl",
    value: string,
    validate?: boolean
  ) => void;
  onBirthDateChange: (date: Date | null) => void;

  onCategoriesChange: (ids: number[]) => void;
  onSubcategoriesChange: (ids: number[]) => void;

  onSubmit: () => void;
  onBack: () => void;
};

export type CategoryWithSubs = {
  id: number;
  name: string;
  subcategories: {
    id: number;
    name: string;
  }[];
};
