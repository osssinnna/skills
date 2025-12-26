import { parse, isValid, differenceInCalendarDays, format } from 'date-fns';
import { ru } from 'date-fns/locale';

type DateInput = string | Date;

const parseMultiFormat = (dateInput: DateInput): Date | null => {
  if (dateInput instanceof Date) {
    return isValid(dateInput) ? dateInput : null;
  }

  const formats = ['dd.MM.yyyy', 'dd/MM/yyyy', 'yyyy-MM-dd'];
  for (const fmt of formats) {
    const parsed = parse(dateInput, fmt, new Date());
    if (isValid(parsed)) return parsed;
  }

  return null;
};

export const calcData = (dateInput: DateInput): string => {
  const parsedDate = parseMultiFormat(dateInput);
  if (!parsedDate) return 'неизвестная дата';

  const now = new Date();
  const diffDays = differenceInCalendarDays(now, parsedDate);

  if (diffDays === 0) return 'сегодня';
  if (diffDays === 1) return 'вчера';
  if (diffDays === 2) return 'позавчера';

  return format(parsedDate, 'd MMMM', { locale: ru });
};
