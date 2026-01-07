import { useState } from "react";

type FormValue = string | number | boolean | null;

type FormErrors<T> = Partial<Record<keyof T, string>>;

export function useForm<T extends Record<string, FormValue>>(
  initialValues: T,
  validators: { [K in keyof T]?: (value: T[K]) => string | undefined }
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});

  const validateField = <K extends keyof T>(name: K): boolean => {
    const validator = validators[name];
    if (!validator) return true;

    const error = validator(values[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));

    return !error;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors<T> = {};

    (Object.keys(validators) as (keyof T)[]).forEach((key) => {
      const validator = validators[key];
      if (!validator) return;

      const error = validator(values[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const setValue = <K extends keyof T>(name: K, value: T[K], validateNow = false) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    if (validateNow && validators[name]) {
      const error = validators[name]!(value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  return {
    values,
    errors,
    setValue,
    validateField,
    validateForm,
    setErrors,
  };
}
