import clsx from "clsx";
import s from "./step-basic-info.module.css";
import { Input } from "../../input";
import type { Props } from "./types";
import { ButtonUI } from "./../../button/button";
import { Dropdown } from "../../dropdown";
import { BirthDatePicker } from "../../birth-date-picker";
import { genderIdToLabel, genderLabelToId, genderOptions } from "../../../registration";
import { AvatarUploader } from "./avatar-uploader";
import { CityAutocomplete } from "../../city-autocomplete";

export const StepBasicInfoUI = ({
  values,
  errors,
  categories,
  isLoading,
  categoriesError,
  formError,
  selectedCategoryIds,
  selectedSubcategoryIds,
  onChange,
  onBirthDateChange,
  onCategoriesChange,
  onSubcategoriesChange,
  onSubmit,
  onBack,
}: Props) => {
  const selectedCategories = categories.filter((c) => selectedCategoryIds.includes(c.id));

  return (
    <form
      noValidate
      className={s.stepContainer}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <AvatarUploader
        avatarUrl={values.avatarUrl ?? null}
        onChange={(url) => onChange("avatarUrl", url)}
      />
      <Input
        label="Имя"
        name="name"
        value={values.name}
        placeholder="Имя"
        error={errors.name}
        onChange={(e) => onChange("name", e.target.value)}
        required
      />

      <div className={s.containerBirthAndGender}>
        <div className={s.dropdown}>
          <div className={s.label}>Дата рождения *</div>

          <BirthDatePicker
            value={values.birthDate ?? undefined}
            onChange={(date) => onBirthDateChange(date)}
          />

          {errors.birthDate && <div className={s.error}>{errors.birthDate}</div>}
        </div>

        <Dropdown
          label="Пол *"
          placeholder="Укажите пол"
          error={errors.gender}
          options={genderOptions}
          selectedIds={values.gender ? [genderLabelToId(values.gender)!] : []}
          onChange={(ids) => onChange("gender", genderIdToLabel(ids[0] ?? null))}
          withoutIcon={true}
        />
      </div>

      <CityAutocomplete
        value={values.location}
        onChange={(value) => onChange("location", value)}
        error={errors.location}
        placeholder="Местоположение"
      />

      {isLoading && <div>Загрузка категорий...</div>}
      {categoriesError && <div className={s.error}>{categoriesError}</div>}

      {!isLoading && !categoriesError && (
        <>
          <Dropdown
            label="Категория навыка *"
            placeholder="Выберите категорию"
            options={categories.map((c) => ({ id: c.id, label: c.name }))}
            selectedIds={selectedCategoryIds}
            multiple
            onChange={onCategoriesChange}
          />

          <Dropdown
            label="Подкатегория навыка *"
            placeholder="Выберите подкатегорию"
            groups={selectedCategories.map((c) => ({
              id: c.id,
              label: c.name,
              options: c.subcategories.map((s) => ({
                id: s.id,
                label: s.name,
              })),
            }))}
            selectedIds={selectedSubcategoryIds}
            multiple
            disabled={selectedCategoryIds.length === 0}
            onChange={onSubcategoriesChange}
          />
        </>
      )}

      {formError && <div className={clsx(s.alert, s.error)}>{formError}</div>}

      <div className={s.buttons}>
        <ButtonUI type="button" onClick={onBack} color="secondary" fullSize>
          Назад
        </ButtonUI>
        <ButtonUI type="submit" color="primary">
          Продолжить
        </ButtonUI>
      </div>
    </form>
  );
};
