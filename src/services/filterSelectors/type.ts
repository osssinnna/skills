export type ActiveFilterTag =
  | { type: "mode"; label: string }
  | { type: "gender"; label: string }
  | { type: "city"; label: string }
  | { type: "subcategory"; id: number; label: string };
