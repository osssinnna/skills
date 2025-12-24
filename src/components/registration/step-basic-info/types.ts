import type { Subcategory } from "../../../utils/types";

export type CategoryWithSubs = {
  id: string;
  name: string;
  subcategories: Subcategory[];
};

export type StepBasicInfoData = {
  name: string;
  location: string;
  birthDate: Date | null;
  gender: "Мужской" | "Женский" | "Не указан";
  avatarUrl: string;
  selectedCategoryIds: string[];
  selectedSubcategoryIds: string[];
};

export type StepBasicInfoProps = {
  data: StepBasicInfoData;
  onChange: (data: StepBasicInfoData) => void;
  onNext: () => void;
  onBack: () => void;
};

export type FormValues = {
  name: string;
  location: string;
  birthDate: Date | null;
  gender: string;
};
