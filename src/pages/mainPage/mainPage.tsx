import { useEffect } from "react";
import { CardSection } from "../../components/card-section/card-section";
import { useDispatch, useSelector } from "../../services/store";
import type { RootState } from "../../services/store";
import type { User } from "../../utils/types";
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
import { selectActiveSection } from "../../services/usersSlice/selectors";
import { setActiveSection } from "../../services/usersSlice/usersSlice";

function MainPage() {
  const dispatch = useDispatch();
  const activeSection = useSelector(selectActiveSection);

  const filters = useSelector(selectFilters);
  const users = useSelector(selectUsers) || [];
  const filteredUsers = useSelector(selectFilteredUsers) || [];
  const popularUsers = useSelector(selectPopularUsers) || [];
  const newUsers = useSelector(selectNewUsers) || [];
  const categoriesTree = useSelector(selectCategoriesWithSubCategories) || [];
  const searchInput = useSelector((store: RootState) => store.users.searchInput);

  useEffect(() => {
    console.log(searchInput);
    dispatch(fetchUsers());
    dispatch(fetchCategories());
  }, [dispatch, searchInput]);

  // Сбрасываем активную секцию при изменении фильтров
  useEffect(() => {
    dispatch(setActiveSection(null));
  }, [dispatch, filters, searchInput]);

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
    cities: [...new Set(users.map((u: User) => u.location))] as string[],
  };

  return (
    <section className={style.sectionFilters}>
      <FilterSidebar {...filtersProps} />
      {/* ❗ ФИЛЬТРОВ НЕТ */}
      {isDefaultFilters && activeSection === null && (
        <>
          <CardSection
            title="Популярное"
            users={popularUsers}
            maxPreviewCount={3}
            onOpen={() => dispatch(setActiveSection("popular"))}
          />
          <CardSection
            title="Новое"
            users={newUsers}
            maxPreviewCount={3}
            onOpen={() => dispatch(setActiveSection("new"))}
          />
          <CardSection
            title="Рекомендуем"
            users={users}
            maxPreviewCount={9}
            onOpen={() => dispatch(setActiveSection("recommend"))}
          />
        </>
      )}

      {/* ❗ ФИЛЬТРОВ НЕТ, НО СЕКЦИЯ УЖЕ ОТКРЫТА */}
      {isDefaultFilters && activeSection === "popular" && (
        <CardSection
          title={`Популярное: ${popularUsers.length}`}
          users={popularUsers}
        />
      )}

      {isDefaultFilters && activeSection === "new" && (
        <CardSection
          title={`Новое: ${newUsers.length}`}
          users={newUsers}
        />
      )}

      {isDefaultFilters && activeSection === "recommend" && (
        <CardSection
          title={`Рекомендуем: ${users.length}`}
          users={users}
        />
      )}

      {/* ❗ ФИЛЬТРЫ ВКЛЮЧЕНЫ - ВСЕГДА ОДНА ОТКРЫТАЯ СЕКЦИЯ */}
      {!isDefaultFilters && (
        <>
          <ActiveFilterSection />
          <CardSection
            title={`Подходящие предложения: ${filteredUsers.length}`}
            users={filteredUsers}
          />
        </>
      )}
    </section>
  );
}

export default MainPage;
