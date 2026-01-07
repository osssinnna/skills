import { useState } from "react";
import { StepSkillCanTeachUI } from "../../ui/registration";
import { useForm } from "../../../hooks/use-form";
import type { StepSkillCanTeachProps } from "./types";
import {
  validateCategories,
  validateName,
  validateSubcategories,
} from "../../../utils/validation-form";
import { useSelector } from "react-redux";
import {
  selectCategoriesStatus,
  selectCategoriesWithSubCategories,
} from "../../../services/categoriesSlice/selectors";

export const StepSkillCanTeach = ({
  data,
  onChange,
  onBack,
  onSubmit,
  isSubmitting,
}: StepSkillCanTeachProps) => {
  const categories = useSelector(selectCategoriesWithSubCategories);
  const status = useSelector(selectCategoriesStatus);

  const isLoading = status === "loading";

  const { values, errors, setValue, validateForm, setErrors } = useForm(
    {
      name: data.skillCanTeach.name ?? "",
      description: data.skillCanTeach.description ?? "",
      categoryId: data.skillCanTeach.categoryId ?? null,
      subcategoryId: data.skillCanTeach.subcategoryId ?? null,
    },
    {
      name: validateName,
      categoryId: validateCategories,
      subcategoryId: validateSubcategories,
    }
  );

  const [images, setImages] = useState<string[]>(data.images ?? []);
  const [previewOpen, setPreviewOpen] = useState(false);

  /* ===== Категории ===== */
  const handleCategoryChange = (id: number) => {
    setValue("categoryId", id, true);

    const subcategoryError =
      id && !values.subcategoryId ? "Выберите подкатегорию навыка" : undefined;

    setErrors((prev) => ({ ...prev, subcategoryId: subcategoryError }));

    setValue("subcategoryId", null);
  };

  /* ===== Фотографии ===== */
  const handleAddImage = (src: string) => {
    setImages((prev) => [...prev, src]);
  };

  const handleAddFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setImages((prev) => [...prev, url]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  /* ===== Preview вместо submit ===== */
  const handlePreview = () => {
    if (!validateForm()) return;

    const finalData = {
      ...data,
      skillCanTeach: { ...values },
      images,
    };

    localStorage.setItem("registration_step_skill_can_teach", JSON.stringify(finalData));
    onChange(finalData);
    setPreviewOpen(true); // будущий попап
  };

  const handleConfirm = () => {
    onSubmit();
  };

  return (
    <StepSkillCanTeachUI
      values={values}
      errors={errors}
      categories={categories}
      isLoading={isLoading}
      images={images}
      isSubmitting={isSubmitting}
      previewOpen={previewOpen}
      onFieldChange={setValue}
      onCategoryChange={handleCategoryChange}
      onSubcategoryChange={(id) => setValue("subcategoryId", id)}
      onAddImage={handleAddImage}
      onAddFile={handleAddFile}
      onRemoveImage={handleRemoveImage}
      onPreview={handlePreview}
      onConfirm={handleConfirm}
      onBack={onBack}
    />
  );
};
