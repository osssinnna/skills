import type { Subcategory, User } from "../../../utils/types";

export type CategoryWithSubs = {
  id: number;
  name: string;
  subcategories: Subcategory[];
};

export type StepBasicInfoData = {
  name: string;
  location: string;
  birthDate: Date | null;
  gender: User["gender"];
  avatarUrl: string;
  selectedCategoryIds: number[];
  selectedSubcategoryIds: number[];
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
  gender: User["gender"];
  avatarUrl: string;
};
