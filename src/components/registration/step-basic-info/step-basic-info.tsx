import { useState } from "react";
import { StepBasicInfoUI } from "../../ui/registration";

import type { StepBasicInfoProps } from "./types";
import { useForm } from "../../../hooks/use-form";
import {
  validateBirthDate,
  validateLocation,
  validateName,
} from "../../../utils/validation-form";
import { useSelector } from "react-redux";
import {
  selectCategoriesError,
  selectCategoriesStatus,
  selectCategoriesWithSubCategories,
} from "../../../services/categoriesSlice/selectors";
import { genderModelToUi, genderUiToModel } from "../utils/gender-ui";

export const StepBasicInfo = ({ data, onChange, onNext, onBack }: StepBasicInfoProps) => {
  const categories = useSelector(selectCategoriesWithSubCategories);
  const status = useSelector(selectCategoriesStatus);
  const error = useSelector(selectCategoriesError);

  const isLoading = status === "loading";

  const categoriesError =
    status === "failed"
      ? typeof error === "string"
        ? error
        : "Ошибка загрузки категорий"
      : null;

  const { values, errors, setValue, validateForm, setErrors } = useForm(
    {
      name: data.name ?? "",
      location: data.location ?? "",
      gender: genderModelToUi(data.gender),
      avatarUrl: data.avatarUrl ?? "",
    },
    {
      name: validateName,
      location: validateLocation,
    }
  );
  const [birthDate, setBirthDate] = useState<Date | null>(
    data.birthDate ? new Date(data.birthDate) : null
  );
  const [birthDateError, setBirthDateError] = useState<string | undefined>(undefined);

  const [formError, setFormError] = useState<string>("");

  const handleSubmit = () => {
    setFormError("");

    if (!validateForm()) return;

    const dateError = validateBirthDate(birthDate);
    if (dateError) {
      setBirthDateError(dateError);
      return;
    }

    const missingSubcategories: string[] = [];
    data.selectedCategoryIds.forEach((catId) => {
      const category = categories.find((cat) => cat.id === catId);
      if (!category) return;

      const hasSub = data.selectedSubcategoryIds.some((subId) =>
        category.subcategories.some((sub) => sub.id === subId)
      );

      if (!hasSub) {
        missingSubcategories.push(category.name);
      }
    });

    if (missingSubcategories.length > 0) {
      setFormError(
        `Выберите хотя бы одну подкатегорию для категорий: ${missingSubcategories.join(
          ", "
        )}`
      );
      return;
    }

    if (
      data.selectedCategoryIds.length === 0 ||
      data.selectedSubcategoryIds.length === 0
    ) {
      setFormError("Выберите хотя бы одну категорию и подкатегорию");
      return;
    }

    const finalData = {
      ...data,
      name: values.name,
      location: values.location,
      birthDate: birthDate,
      gender: genderUiToModel(values.gender),
      avatarUrl: values.avatarUrl,
    };

    localStorage.setItem("registration_step_basic_info", JSON.stringify(finalData));
    onChange(finalData);
    onNext();
  };

  const handleFieldChange = (
    field: "name" | "location" | "gender" | "avatarUrl",
    value: string
  ) => {
    setValue(field, value);

    let error: string | undefined;

    if (field === "name") {
      error = validateName(value);
    } else if (field === "location") {
      error = validateLocation(value);
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // Отдельный обработчик для даты
  const handleBirthDateChange = (date: Date | null) => {
    setBirthDate(date);
    setBirthDateError(date ? validateBirthDate(date) : undefined);
  };

  const handleCategoriesChange = (ids: number[]) => {
    const validSubcategoryIds = data.selectedSubcategoryIds.filter((subId) =>
      categories.some(
        (cat) => ids.includes(cat.id) && cat.subcategories.some((sub) => sub.id === subId)
      )
    );

    onChange({
      ...data,
      selectedCategoryIds: ids,
      selectedSubcategoryIds: validSubcategoryIds,
    });
    setFormError("");
  };

  const handleSubcategoriesChange = (subIds: number[]) => {
    onChange({ ...data, selectedSubcategoryIds: subIds });
    setFormError("");
  };

  return (
    <StepBasicInfoUI
      values={{ ...values, birthDate }}
      errors={{ ...errors, birthDate: birthDateError }}
      categories={categories}
      isLoading={isLoading}
      categoriesError={categoriesError}
      formError={formError}
      selectedCategoryIds={data.selectedCategoryIds}
      selectedSubcategoryIds={data.selectedSubcategoryIds}
      onChange={handleFieldChange}
      onBirthDateChange={handleBirthDateChange}
      onCategoriesChange={handleCategoriesChange}
      onSubcategoriesChange={handleSubcategoriesChange}
      onSubmit={handleSubmit}
      onBack={onBack}
    />
  );
};
