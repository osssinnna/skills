export type StepCredentialsData = {
  email: string;
  password: string;
};

export type StepCredentialsProps = {
  onNext?: () => void;
  onChange?: (data: StepCredentialsData) => void;
  currentStep: number | string;
};
