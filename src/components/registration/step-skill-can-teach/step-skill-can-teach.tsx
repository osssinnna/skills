import { useState } from "react";
import { StepSkillCanTeachUI } from "../../ui/registration";
import { useForm } from "../../../hooks/use-form";
import type { OfferPreviewProps, StepSkillCanTeachProps } from "./types";
import {
  validateCategories,
  validateDescriptionSkill,
  validateNameSkill,
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
  const [previewData, setPreviewData] = useState<OfferPreviewProps | null>(null);
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
      name: validateNameSkill,
      description: validateDescriptionSkill,
      categoryId: validateCategories,
      subcategoryId: validateSubcategories,
    }
  );

  const [images, setImages] = useState<string[]>(data.images ?? []);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [imagesError, setImagesError] = useState<string>("");

  /* ===== Категории ===== */
  const handleCategoryChange = (id: number) => {
    setValue("categoryId", id, true);

    const subcategoryError =
      id && !values.subcategoryId ? "Выберите подкатегорию навыка" : undefined;

    setErrors((prev) => ({ ...prev, subcategoryId: subcategoryError }));

    setValue("subcategoryId", null);
  };

  const handleSubcategoryChange = (id: number) => {
    setValue("subcategoryId", id, true);

    let error: string | undefined;

    if (!id) error = "Выберите подкатегорию навыка";
    setErrors((prev) => ({ ...prev, subcategoryId: error }));
  };

  /* ===== Фотографии ===== */
  const handleAddImage = (src: string) => {
    setImages((prev) => [...prev, src]);
    setImagesError("");
  };

  const handleAddFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setImages((prev) => [...prev, url]);
    setImagesError("");
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFieldChange = (
    field: "name" | "description" | "categoryId" | "subcategoryId",
    value: string
  ) => {
    setValue(field, value);

    let error: string | undefined;

    if (field === "name") {
      error = validateNameSkill(value);
    } else if (field === "description") {
      error = validateDescriptionSkill(value);
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  /* ===== Preview вместо submit ===== */
  const handlePreview = () => {
    setImagesError("");

    if (!validateForm()) return;

    if (images.length === 0) {
      setImagesError("Добавьте хотя бы одно изображение");
      return;
    }

    const selectedCategory = categories.find((c) => c.id === values.categoryId);
    const selectedSubcategory = selectedCategory?.subcategories.find(
      (s) => s.id === values.subcategoryId
    );

    if (!selectedCategory || !selectedSubcategory) {
      setErrors({
        categoryId: "Категория не найдена",
        subcategoryId: "Подкатегория не найдена",
      });
      return;
    }

    const previewData = {
      skillName: values.name,
      skillCategory: selectedCategory.name,
      skillSubCategory: selectedSubcategory.name,
      skillDescription: values.description,
      skillImg: images,
    };

    setPreviewData(previewData);

    const finalData = {
      ...data,
      skillCanTeach: { ...values },
      images,
    };

    localStorage.setItem("registration_step_skill_can_teach", JSON.stringify(finalData));
    onChange(finalData);
    setPreviewOpen(true);
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
      imagesError={imagesError}
      isSubmitting={isSubmitting}
      previewOpen={previewOpen}
      setPreviewOpen={setPreviewOpen}
      previewData={previewData}
      onFieldChange={handleFieldChange}
      onCategoryChange={handleCategoryChange}
      onSubcategoryChange={handleSubcategoryChange}
      onAddImage={handleAddImage}
      onAddFile={handleAddFile}
      onRemoveImage={handleRemoveImage}
      onPreview={handlePreview}
      onConfirm={handleConfirm}
      onBack={onBack}
    />
  );
};
