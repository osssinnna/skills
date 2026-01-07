import { useState } from "react";
import type { RegistrationFormData } from "./types";
import {
  clearRegistrationStorage,
  INITIAL_DATA,
  useRegistrationStorage,
} from "../../components/registration";
import type { RegistrationData } from "../../utils/types";
import { RegisterUI } from "../../components/ui/registration";

export const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Восстановление из localStorage
  useRegistrationStorage(setFormData, setCurrentStep);

  // Обновление данных шагов
  const updateData = <K extends keyof RegistrationFormData>(
    key: K,
    data: RegistrationFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: data }));
  };

  // Навигация
  const goToStep = (step: number) => setCurrentStep(step);

  // Финальная отправка
  const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const payload: RegistrationData = {
        email: formData.stepCredentials.email,
        password: formData.stepCredentials.password,
        user: {
          name: formData.stepBasicInfo.name,
          location: formData.stepBasicInfo.location,
          birthDate: formData.stepBasicInfo.birthDate,
          gender: formData.stepBasicInfo.gender,
          avatarUrl: formData.stepBasicInfo.avatarUrl,
          images: formData.stepSkillCanTeach.images,
          skillCanTeach: formData.stepSkillCanTeach.skillCanTeach,
          subcategoriesWantToLearn: formData.stepBasicInfo.selectedSubcategoryIds.map(
            (id: number) => ({
              id,
            })
          ),
        },
      };

      {
        /* TODO: работа с api, отпарвка данных на сервер  */
      }
      // const response = await register(payload);
      // saveAuthData(response);

      clearRegistrationStorage();
      alert("🎉 Регистрация успешна!");
      // TODO: navigate("/profile");
    } catch (err: any) {
      console.error("Registration error:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Ошибка регистрации. Попробуйте позже."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <RegisterUI
      currentStep={currentStep}
      error={error}
      formData={formData}
      updateData={updateData}
      goToStep={goToStep}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    />
  );
};
