import clsx from "clsx";
import s from "./step-basic-info.module.css";
import { Input } from "../../input";
import type { Props } from "./types";
import { ButtonUI } from "./../../button/button";
import { Dropdown } from "../../dropdown";
import { BirthDatePicker } from "../../birth-date-picker";

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
      <Input
        label="Имя"
        name="name"
        value={values.name}
        placeholder="Имя"
        error={errors.name}
        onChange={(v) => onChange("name", v)}
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
          options={[
            { id: "Не указан", label: "Не указывать" },
            { id: "Мужской", label: "Мужской" },
            { id: "Женский", label: "Женский" },
          ]}
          selectedIds={values.gender ? [values.gender] : []}
          onChange={(ids) => onChange("gender", ids[0] ?? "")}
          withoutIcon={true}
        />
      </div>

      <Input
        label="Местоположение"
        name="location"
        value={values.location}
        placeholder="Местоположение"
        error={errors.location}
        onChange={(v) => onChange("location", v)}
        required
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
