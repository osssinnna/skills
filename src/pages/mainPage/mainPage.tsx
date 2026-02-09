import { useEffect, useState } from "react";
import { CardSection } from "../../components/card-section/card-section";
import { useDispatch, useSelector } from "../../services/store";
import type { RootState } from "../../services/store";
import type { User } from "../../utils/types";
import {
  selectFilters,
  selectNewUsers,
  selectPopularUsers,
  selectUsers,
  selectUsersByNameOrSkill,
} from "../../services/usersSlice/selectors";
import { fetchUsers, setActiveSection } from "../../services/usersSlice/usersSlice";
import style from "./mainPage.module.css";
import { selectCategoriesWithSubCategories } from "../../services/categoriesSlice/selectors";
import { fetchCategories } from "../../services/categoriesSlice/categoriesSlice";
import { FilterSidebar } from "../../components/filter-sidebar";
import { ActiveFilterSection } from "../../components/ui/active-filter-section";
import { selectActiveSection } from "../../services/usersSlice/selectors";

function MainPage() {
  const dispatch = useDispatch();
  const activeSection = useSelector(selectActiveSection); // Redux activeSection
  const searchInput = useSelector((state: RootState) => state.users.searchInput);

  const filters = useSelector(selectFilters);
  const users = useSelector(selectUsers) || [];
  const filteredUsers = useSelector((state: RootState) =>
    selectUsersByNameOrSkill(state, searchInput)
  );
  const popularUsers = useSelector(selectPopularUsers) || [];
  const newUsers = useSelector(selectNewUsers) || [];
  const categoriesTree = useSelector(selectCategoriesWithSubCategories) || [];

  const USERS_PER_LOAD = 21; 
  const [displayedUsers, setDisplayedUsers] = useState<User[]>([]);
  const [nextIndex, setNextIndex] = useState(0);

  const [displayedFilteredUsers, setDisplayedFilteredUsers] = useState<User[]>([]);
  const [nextFilteredIndex, setNextFilteredIndex] = useState(0);

  // Подгрузка фильтрованных пользователей
  useEffect(() => {
    if (filteredUsers.length > 0) {
      const initialLoad = filteredUsers.slice(0, USERS_PER_LOAD);
      setDisplayedFilteredUsers(initialLoad);
      setNextFilteredIndex(initialLoad.length);
    } else {
      setDisplayedFilteredUsers([]);
      setNextFilteredIndex(0);
    }
  }, [filteredUsers]);

  // Подгрузка всех пользователей
  useEffect(() => {
    if (users.length > 0) {
      const initialLoad = users.slice(0, USERS_PER_LOAD);
      setDisplayedUsers(initialLoad);
      setNextIndex(initialLoad.length);
    }
  }, [users]);

  // Загрузка пользователей и категорий
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchCategories());
  }, [dispatch, searchInput]);

  // Сброс активной секции при изменении фильтров или поиска
  useEffect(() => {
    dispatch(setActiveSection(null));
  }, [dispatch, filters, searchInput]);

  const loadMoreUsers = () => {
    const nextLoad = users.slice(nextIndex, nextIndex + USERS_PER_LOAD);
    setDisplayedUsers((prev) => [...prev, ...nextLoad]);
    setNextIndex((prev) => prev + nextLoad.length);
  };

  const loadMoreFilteredUsers = () => {
    const nextLoad = filteredUsers.slice(nextFilteredIndex, nextFilteredIndex + USERS_PER_LOAD);
    setDisplayedFilteredUsers((prev) => [...prev, ...nextLoad]);
    setNextFilteredIndex((prev) => prev + nextLoad.length);
  };

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
        <div>
          <CardSection
            title={`Рекомендуем: ${users.length}`}
            users={displayedUsers}
          />

          {nextIndex < users.length && (
            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <button
                onClick={loadMoreUsers}
                style={{
                  padding: "8px 16px",
                  background: "#333",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Показать ещё
              </button>
            </div>
          )}
        </div>
      )}

      {/* ❗ ФИЛЬТРЫ ВКЛЮЧЕНЫ */}
      {!isDefaultFilters && (
        <>
          <ActiveFilterSection />

          <CardSection
            title={`Подходящие предложения: ${filteredUsers.length}`}
            users={displayedFilteredUsers}
          />

          {nextFilteredIndex < filteredUsers.length && (
            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <button
                onClick={loadMoreFilteredUsers}
                style={{
                  padding: "8px 16px",
                  background: "#333",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Показать ещё
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default MainPage;
