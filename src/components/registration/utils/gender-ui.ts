import type { User } from "../../../utils/types";

export type GenderUI = "Мужской" | "Женский" | "Не указан";
export type GenderLabel = (typeof genderOptions)[number]["label"];
export type GenderId = (typeof genderOptions)[number]["id"];

export const genderOptions = [
  { id: 1, label: "Не указан" },
  { id: 2, label: "Мужской" },
  { id: 3, label: "Женский" },
];

export const genderUiToModel = (value: GenderUI): User["gender"] =>
  value === "Не указан" ? null : value;

export const genderModelToUi = (value: User["gender"]): GenderUI => value ?? "Не указан";

export const genderLabelToId = (label: GenderLabel | ""): GenderId | null => {
  const found = genderOptions.find((g) => g.label === label);
  return found ? found.id : null;
};

export const genderIdToLabel = (id: GenderId | null): GenderLabel | "" => {
  const found = genderOptions.find((g) => g.id === id);
  return found ? found.label : "";
};
