import {
  parse,
  parseISO,
  isValid,
  differenceInCalendarDays,
  format,
} from 'date-fns';
import { ru } from 'date-fns/locale';

type DateInput = string | Date;

const parseMultiFormat = (dateInput: DateInput): Date | null => {
  // 1️⃣ Если уже Date
  if (dateInput instanceof Date) {
    return isValid(dateInput) ? dateInput : null;
  }

  // 2️⃣ ISO-строка (2025-12-26T08:41:23.123Z)
  if (typeof dateInput === 'string') {
    const iso = parseISO(dateInput);
    if (isValid(iso)) return iso;
  }

  // 3️⃣ Пользовательские форматы
  const formats = ['dd.MM.yyyy', 'dd/MM/yyyy', 'yyyy-MM-dd'];
  for (const fmt of formats) {
    const parsed = parse(dateInput, fmt, new Date());
    if (isValid(parsed)) return parsed;
  }

  return null;
};

export const calcData = (dateInput: DateInput): string => {
  const parsedDate = parseMultiFormat(dateInput);
  if (!parsedDate) return 'неверный формат даты';

  const now = new Date();
  const diffDays = differenceInCalendarDays(now, parsedDate);

  if (diffDays === 0) return 'сегодня';
  if (diffDays === 1) return 'вчера';
  if (diffDays === 2) return 'позавчера';

  return format(parsedDate, 'd MMMM', { locale: ru });
};
