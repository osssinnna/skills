export type InputUIProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "url" | "tel" | "number" | "date" | "file";
  value?: string;
  placeholder?: string;
  error?: string;
  isValid?: boolean;
  warning?: string;
  required?: boolean;
  accept?: string;
  multiple?: boolean;

  className?: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
