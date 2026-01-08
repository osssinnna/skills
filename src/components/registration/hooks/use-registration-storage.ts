import { useEffect } from "react";
import { STORAGE_KEYS } from "../constants";
import type { RegistrationFormData } from "../../../pages/register";

export const useRegistrationStorage = (
  setFormData: (updater: (prev: RegistrationFormData) => RegistrationFormData) => void,
  setCurrentStep: (step: number) => void
) => {
  useEffect(() => {
    try {
      const credentials = localStorage.getItem(STORAGE_KEYS.credentials);
      const basicInfo = localStorage.getItem(STORAGE_KEYS.basicInfo);
      const skills = localStorage.getItem(STORAGE_KEYS.skills);

      let step = 1;

      if (credentials) {
        setFormData((prev) => ({
          ...prev,
          stepCredentials: JSON.parse(credentials),
        }));
        step = 2;
      }

      if (basicInfo) {
        setFormData((prev) => ({
          ...prev,
          stepBasicInfo: JSON.parse(basicInfo),
        }));
        step = 3;
      }

      if (skills) {
        setFormData((prev) => ({
          ...prev,
          stepSkillCanTeach: JSON.parse(skills),
        }));
      }

      if (step > 1) setCurrentStep(step);
    } catch (e) {
      console.error("Ошибка восстановления данных регистрации:", e);
    }
  }, [setFormData, setCurrentStep]);
};

export const clearRegistrationStorage = () => {
  Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
};
