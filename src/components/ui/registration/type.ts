import type { RegistrationFormData } from "../../../pages/register";

export type Props = {
  currentStep: number;
  error: string | null;
  formData: RegistrationFormData;
  updateData: <K extends keyof RegistrationFormData>(
    key: K,
    data: RegistrationFormData[K]
  ) => void;
  goToStep: (step: number) => void;
  handleSubmit: () => Promise<void>;
  isSubmitting: boolean;
};
