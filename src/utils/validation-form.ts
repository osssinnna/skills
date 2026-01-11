const fullEmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/i;

const hasBasicEmailStructure = (value: string): boolean => {
  const atIndex = value.indexOf("@");
  if (atIndex === -1) return false;
  return value.indexOf(".", atIndex) > atIndex;
};

export const validateCredentialsEmail = (value: string): string | undefined => {
  const trimmed = value.trim().toLowerCase();

  if (!trimmed) {
    return "Email обязателен";
  }

  if (/[а-яА-ЯёЁ]/.test(trimmed)) {
    return "Email должен содержать только латинские символы";
  }

  if (
    trimmed.length < 6 ||
    trimmed.endsWith("@") ||
    trimmed.endsWith(".") ||
    !hasBasicEmailStructure(trimmed)
  ) {
    return undefined;
  }

  if (!fullEmailRegex.test(trimmed)) {
    return "Введите корректный email адрес";
  }

  return undefined;
};

export const validateCredentialsPassword = (value: string): string | undefined => {
  if (value.length < 8) {
    return "Пароль должен содержать не менее 8 знаков";
  }
  return undefined;
};

export const validateName = (value: string): string | undefined => {
  const trimmed = value.trim();

  if (!trimmed) {
    return "Введите имя";
  }

  if (trimmed.length < 2) {
    return "Имя должно содержать не менее 2 символов";
  }

  return undefined;
};

export const validateNameSkill = (value: string): string | undefined => {
  const trimmed = value.trim();

  if (!trimmed) {
    return "Введите название навыка";
  }

  if (trimmed.length < 2) {
    return "Название навыка должно содержать не менее 2 символов";
  }

  return undefined;
};

export const validateDescriptionSkill = (value: string): string | undefined => {
  const trimmed = value.trim();

  if (!trimmed) {
    return "Введите описание навыка";
  }

  if (trimmed.length < 10) {
    return "Описание навыка должно содержать не менее 10 символов";
  }

  return undefined;
};

export const validateLocation = (value: string): string | undefined => {
  if (!value.trim()) {
    return "Введите местоположение";
  }
  return undefined;
};

export const validateBirthDate = (date: Date | null): string | undefined => {
  if (!date) {
    return "Укажите дату рождения";
  }

  const now = new Date();
  if (date > now) {
    return "Дата рождения не может быть в будущем";
  }
  return undefined;
};

export const validateCategories = (value: number | null) => {
  return value ? undefined : "Введите категорию навыка";
};

export const validateSubcategories = (value: number | null) => {
  return value ? undefined : "Введите подкатегорию навыка";
};
