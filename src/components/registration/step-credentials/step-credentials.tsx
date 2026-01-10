import { useEffect, useRef, useState } from "react";
import { StepCredentialsUI } from "../../ui/registration";
import type { StepCredentialsProps } from ".";
import { useForm } from "../../../hooks/use-form";
import {
  validateCredentialsEmail,
  validateCredentialsPassword,
} from "../../../utils/validation-form";
import show from "../../../assets/icon-eye.svg";
import hide from "../../../assets/icon-eye-slash.svg";
import emails from "../../../mock/emails.json";

type CredentialsData = {
  email: string;
  password: string;
};

export const StepCredentials = ({
  onNext,
  onChange,
  currentStep,
}: StepCredentialsProps) => {
  const { values, errors, setValue, validateForm, setErrors } = useForm<CredentialsData>(
    { email: "", password: "" },
    {
      email: validateCredentialsEmail,
      password: validateCredentialsPassword,
    }
  );
  const [showPassword, setShowPassword] = useState(false);

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
      onChange?.(values);
      onNext?.();
    } catch {
      setErrors({ email: "Ошибка сервера. Попробуйте позже" });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleIconPassword = () => {
    return showPassword ? hide : show;
  };

  return (
    <StepCredentialsUI
      values={values}
      errors={errors}
      showPassword={showPassword}
      icon={toggleIconPassword()}
      togglePasswordVisibility={togglePasswordVisibility}
      currentStep={currentStep}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onSubmit={handleSubmit}
      emailInputRef={emailInputRef}
    />
  );
};
