import { useEffect, useRef } from "react";
import { StepCredentialsUI } from "../../ui/registration";
import type { StepCredentialsProps } from ".";
import { useForm } from "../../../hooks/use-form";
import {
  validateCredentialsEmail,
  validateCredentialsPassword,
} from "../../../utils/validation-form";

import emails from "../../../mock/emails.json";

type CredentialsData = {
  email: string;
  password: string;
};

export const StepCredentials = ({ onNext }: StepCredentialsProps) => {
  const { values, errors, setValue, validateForm, setErrors } = useForm<CredentialsData>(
    { email: "", password: "" },
    {
      email: validateCredentialsEmail,
      password: validateCredentialsPassword,
    }
  );

  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  const onEmailChange = (v: string) => {
    const normalized = v.trim().toLowerCase();
    setValue("email", normalized);

    const emailError = validateCredentialsEmail(normalized);
    setErrors((prev) => ({ ...prev, email: emailError }));
  };

  const onPasswordChange = (v: string) => {
    setValue("password", v);

    const passwordError = validateCredentialsPassword(v);
    setErrors((prev) => ({ ...prev, password: passwordError }));
  };

  // TODO: перенести на бэкенд
  const checkEmail = async (email: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const normalizedEmail = email.trim().toLowerCase();
    const exists = emails.some(
      (email: { email: string; id: string }) =>
        email.email.toLowerCase() === normalizedEmail
    );

    return exists;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const exists = await checkEmail(values.email);
      if (exists) {
        setErrors({ email: "Этот email уже используется" });
        return;
      }

      localStorage.setItem("registration_step_credentials", JSON.stringify(values));
      onNext();
    } catch {
      setErrors({ email: "Ошибка сервера. Попробуйте позже" });
    }
  };

  return (
    <StepCredentialsUI
      values={values}
      errors={errors}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onSubmit={handleSubmit}
      emailInputRef={emailInputRef}
    />
  );
};
