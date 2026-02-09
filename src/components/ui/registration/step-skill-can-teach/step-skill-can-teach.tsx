import s from "./step-skill-can-teach.module.css";
import type { Props } from "./types";
import { Input } from "../../input/input";
import { ButtonUI } from "../../button";
import { ImageUploader } from "./image-uploader";
import { Dropdown } from "../../dropdown";
import { Modal } from "../../../modal/modal";
import { OfferPreview } from "../../offer-preview-modal";

export const StepSkillCanTeachUI = ({
  values,
  errors,
  categories,
  isLoading,
  images,
  imagesError,
  previewData,
  previewOpen,
  setPreviewOpen,

  onFieldChange,
  onCategoryChange,
  onSubcategoryChange,

  onAddImage,
  onRemoveImage,

  onPreview,
  onConfirm,
  onBack,
}: Props) => {
  return (
    <form className={s.stepContainer} onSubmit={(e) => e.preventDefault()}>
      <Input
        label="Название навыка"
        name="name"
        value={values.name}
        onChange={(e) => onFieldChange("name", e.target.value)}
        error={errors.name}
        required
      />

      {!isLoading && (
        <>
          <Dropdown
            label="Категория навыка *"
            placeholder="Выберите категорию"
            error={errors.categoryId}
            options={categories.map((c) => ({ id: c.id, label: c.name }))}
            selectedIds={values.categoryId ? [values.categoryId] : []}
            onChange={(ids) => onCategoryChange(ids[0] ?? "")}
          />

          <Dropdown
            label="Подкатегория навыка *"
            placeholder="Выберите подкатегорию"
            error={errors.subcategoryId}
            disabled={!values.categoryId}
            options={
              categories.find((c) => c.id === values.categoryId)
                ? categories
                    .find((c) => c.id === values.categoryId)
                    ?.subcategories.map((s) => ({
                      id: s.id,
                      label: s.name,
                    }))
                : []
            }
            selectedIds={values.subcategoryId ? [values.subcategoryId] : []}
            onChange={(ids) => onSubcategoryChange(ids[0] ?? "")}
          />
        </>
      )}

      <div className={s.formGroup}>
        <label>Описание навыка</label>
        <textarea
          value={values.description}
          onChange={(e) => onFieldChange("description", e.target.value)}
          rows={4}
          className={s.textarea}
          required
        />
        {errors.description && <div className={s.errorText}>{errors.description}</div>}
      </div>

      {/* Загрузчик изображений */}
      <ImageUploader
        images={images}
        onAdd={onAddImage}
        onRemove={onRemoveImage}
        error={imagesError}
        className={s.imageUploader}
      />

      <div className={s.buttons}>
        <ButtonUI type="button" onClick={onBack} color="secondary">
          Назад
        </ButtonUI>

        <ButtonUI type="button" color="primary" onClick={onPreview}>
          Продолжить
        </ButtonUI>
      </div>

      {previewOpen && previewData && (
        <Modal
          onClose={() => setPreviewOpen(false)}
          children={
            <OfferPreview
              skillName={previewData.skillName}
              skillCategory={previewData.skillCategory}
              skillSubCategory={previewData.skillSubCategory}
              skillDescription={previewData.skillDescription}
              skillImg={previewData.skillImg}
              onEdit={() => setPreviewOpen(false)}
              onConfirm={onConfirm}
            />
          }
        />
      )}
    </form>
  );
};
