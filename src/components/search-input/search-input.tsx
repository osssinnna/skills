import { useState, type FC } from "react";
import { SearchInputUI } from "../ui/search-input";

export const SearchInput: FC = () => {
  const [value, setValue] = useState("");
  return (
    <SearchInputUI
      value={value}
      onChange={setValue}
      onClear={() => setValue("")}
      placeholder="Искать навык"
    />
  );
};
