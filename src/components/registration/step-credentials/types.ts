export type StepCredentialsData = {
  email: string;
  password: string;
};

export type StepCredentialsProps = {
  onNext: () => void;
};
