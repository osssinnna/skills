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
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
