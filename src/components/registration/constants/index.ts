import type { RegistrationFormData } from "../../../pages/register";

export const INITIAL_DATA: RegistrationFormData = {
  stepCredentials: { email: "", password: "" },
  stepBasicInfo: {
    name: "",
    location: "",
    birthDate: "",
    gender: "Не указан",
    avatarUrl: "",
    selectedCategoryIds: [],
    selectedSubcategoryIds: [],
  },
  stepSkillCanTeach: {
    skillCanTeach: {
      name: "",
      description: "",
      categoryId: "",
      subcategoryId: "",
    },
    images: [],
  },
};

export const STORAGE_KEYS = {
  credentials: "registration_step_credentials",
  basicInfo: "registration_step_basic_info",
  skills: "registration_step_skill_can_teach",
} as const;
