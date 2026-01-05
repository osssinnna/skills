import { useDispatch, useSelector } from "react-redux";
import s from "./active-filter-section.module.css";
import { setFilters } from "../../../services/usersSlice/usersSlice";
import { selectFilters } from "../../../services/usersSlice/selectors";
import { selectActiveFilterTags } from "../../../services/filterSelectors/filterSelectors";
import type { ActiveFilterTag } from "../../../services/filterSelectors/type";

export const ActiveFilterSection: React.FC = () => {
  const dispatch = useDispatch();
  const activeTags = useSelector(selectActiveFilterTags);
  const filters = useSelector(selectFilters);

  const handleRemoveFilter = (tag: ActiveFilterTag) => {
    switch (tag.type) {
      case "mode":
        dispatch(setFilters({ mode: "all" }));
        break;

      case "gender":
        dispatch(setFilters({ gender: null }));
        break;

      case "city":
        dispatch(setFilters({ city: null }));
        break;

      case "subcategory":
        dispatch(
          setFilters({
            subcategoryIds: filters.subcategoryIds.filter((id) => id !== tag.id),
          })
        );
        break;
    }
  };
  return (
    <>
      {activeTags.length > 0 && (
        <section className={s.section}>
          {activeTags.map((tag) => (
            <button
              className={s.buttonsTag}
              key={`${tag.type}-${"id" in tag ? tag.id : tag.label}`}
              onClick={() => handleRemoveFilter(tag)}
            >
              <span>{tag.label}</span> <span>✕</span>
            </button>
          ))}
        </section>
      )}
    </>
  );
};
