export type DropdownOption = {
  id: number;
  label: string;
};

export type DropdownGroup = {
  id: number;
  label: string;
  options: DropdownOption[];
};

export type Props = {
  label: string;
  placeholder: string;
  error?: string;

  options?: DropdownOption[];
  groups?: DropdownGroup[];

  selectedIds: number[];
  multiple?: boolean;
  disabled?: boolean;

  onChange: (ids: number[]) => void;
  withoutIcon?: boolean;
};
