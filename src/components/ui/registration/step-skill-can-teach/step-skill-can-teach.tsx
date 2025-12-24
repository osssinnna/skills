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
  previewOpen,

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
        onChange={(v) => onFieldChange("name", v)}
        error={errors.name}
        required
      />

      {!isLoading && (
        <>
          <Dropdown
            label="Категория навыка *"
            placeholder="Выберите категорию"
            options={categories.map((c) => ({ id: c.id, label: c.name }))}
            selectedIds={values.categoryId ? [values.categoryId] : []}
            onChange={(ids) => onCategoryChange(ids[0] ?? "")}
          />

          <Dropdown
            label="Подкатегория навыка *"
            placeholder="Выберите подкатегорию"
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
      </div>

      {/* Загрузчик изображений */}
      <ImageUploader images={images} onAdd={onAddImage} onRemove={onRemoveImage} />

      <div className={s.buttons}>
        <ButtonUI type="button" onClick={onBack} color="secondary">
          Назад
        </ButtonUI>

        <ButtonUI type="button" color="primary" onClick={onPreview}>
          Продолжить
        </ButtonUI>
      </div>

      {/* {previewOpen && (
        <div className={s.previewStub}>
          Preview modal will be here
          <ButtonUI color="primary" onClick={onConfirm}>
            Подтвердить
          </ButtonUI>
        </div>
      )} */}

      {previewOpen && (
        <Modal
          onClose={onConfirm}
          children={
            <OfferPreview
              skillName="rrr"
              skillCategory="rrr"
              skillSubCategory="ddd"
              skillDescription="fdddd"
              skillImg={["dd", "ddd"]}
            />
          }
        />
      )}
    </form>
  );
};
