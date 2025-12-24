import { useState } from "react";

type FormErrors<T> = Partial<Record<keyof T, string>>;

export function useForm<T extends Record<string, string>>(
  initialValues: T,
  validators: { [K in keyof T]?: (value: string) => string | undefined }
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});

  const validateField = (name: keyof T): boolean => {
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
      if (validator) {
        const error = validator(values[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const setValue = (name: keyof T, value: string, validateNow = false) => {
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
