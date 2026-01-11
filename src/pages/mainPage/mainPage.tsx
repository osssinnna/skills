import { useEffect } from "react";
import { CardSection } from "../../components/card-section/card-section";
import { useDispatch, useSelector } from "../../services/store";
import {
  selectFilteredUsers,
  selectFilters,
  selectNewUsers,
  selectPopularUsers,
  selectUsers,
} from "../../services/usersSlice/selectors";
import { fetchUsers } from "../../services/usersSlice/usersSlice";
import style from "./mainPage.module.css";
import { selectCategoriesWithSubCategories } from "../../services/categoriesSlice/selectors";
import { fetchCategories } from "../../services/categoriesSlice/categoriesSlice";
import { FilterSidebar } from "../../components/filter-sidebar";
import { ActiveFilterSection } from "../../components/ui/active-filter-section";

function MainPage() {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const users = useSelector(selectUsers);
  const filteredUsers = useSelector(selectFilteredUsers);
  const popularUsers = useSelector(selectPopularUsers);
  const newUsers = useSelector(selectNewUsers);
  const categoriesTree = useSelector(selectCategoriesWithSubCategories);
  const searchInput = useSelector((store) => store.users.searchInput);

  useEffect(() => {
    console.log(searchInput);
    dispatch(fetchUsers());
    dispatch(fetchCategories());
  }, [dispatch, searchInput]);

  const isDefaultFilters =
    filters.mode === "all" &&
    filters.gender === null &&
    filters.city === null &&
    filters.subcategoryIds.length === 0 &&
    filters.categoryIds.length === 0 &&
    searchInput === "";

  const filtersProps = {
    filters,
    categoriesTree,
    cities: [...new Set(users.map((u) => u.location))],
  };

  return (
    <section className={style.sectionFilters}>
      <FilterSidebar {...filtersProps} />
      {isDefaultFilters ? (
        <>
          <CardSection
            title="Популярное"
            users={popularUsers}
            maxPreviewCount={3}
          />
          <CardSection title="Новое" users={newUsers} maxPreviewCount={3} />
          <CardSection title="Рекомендуем" users={users} maxPreviewCount={9} />
        </>
      ) : (
        <>
          <ActiveFilterSection />
          <CardSection
            title={`Подходящие предложения: ${filteredUsers.length}`}
            users={filteredUsers}
            maxPreviewCount={12}
          />
        </>
      )}
    </section>
  );
}

export default MainPage;
