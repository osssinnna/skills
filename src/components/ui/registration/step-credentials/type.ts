import type { StepCredentialsData } from "../../../registration";

type FieldErrors<T> = Partial<Record<keyof T, string>>;

export type StepCredentialsUIProps = {
  values: StepCredentialsData;
  errors: FieldErrors<StepCredentialsData>;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
  emailInputRef: React.RefObject<HTMLInputElement | null>;
};
