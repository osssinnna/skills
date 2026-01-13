import { useEffect, useState } from "react";
import type { RegistrationFormData } from "./types";
import {
  clearRegistrationStorage,
  INITIAL_DATA,
  useRegistrationStorage,
} from "../../components/registration";
import type { RegistrationData } from "../../utils/types";
import { RegisterUI } from "../../components/ui/registration";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchCategories } from "../../services/categoriesSlice/categoriesSlice";
import { useDispatch } from "../../services/store";
import {
  authChecked,
  registerUser,
} from "../../services/currentUserSlice/currentUserSlice";

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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

    const date = new Date(formData.stepBasicInfo.birthDate!);
    const formattedDate: string = date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    setIsSubmitting(true);
    setError(null);

    try {
      const payload: RegistrationData = {
        email: formData.stepCredentials.email,
        password: formData.stepCredentials.password,
        user: {
          name: formData.stepBasicInfo.name,
          location: formData.stepBasicInfo.location,
          birthDate: formattedDate,
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

      dispatch(registerUser(payload));
      dispatch(authChecked());

      // Очищаем localStorage от данных регистрации
      clearRegistrationStorage();
      
      // Редирект на страницу, с которой пользователь пришел, или на главную
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err: unknown) {
      console.error("Registration error:", err);
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
