export type DropdownOption = {
  id: string;
  label: string;
};

export type DropdownGroup = {
  id: string;
  label: string;
  options: DropdownOption[];
};

export type Props = {
  label: string;
  placeholder: string;

  options?: DropdownOption[];
  groups?: DropdownGroup[];

  selectedIds: string[];
  multiple?: boolean;
  disabled?: boolean;

  onChange: (ids: string[]) => void;
  withoutIcon?: boolean;
};
