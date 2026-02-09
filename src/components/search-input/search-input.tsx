import { useEffect, useState, type FC } from "react";
import { SearchInputUI } from "../ui/search-input";
import { useDispatch } from "../../services/store";
import { setSearchInput } from "../../services/usersSlice/usersSlice";

export const SearchInput: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchInput(value));
  }, [value]);

  return (
    <SearchInputUI
      value={value}
      onChange={setValue}
      onClear={() => setValue("")}
      placeholder="Искать навык"
    />
  );
};
