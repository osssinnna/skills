import { useState, useEffect, useMemo } from "react";
import { FilterSidebar } from "../filter-sidebar";
import type { Filters, FilterSidebarProps } from "../filter-sidebar/types";
import type { Category, Subcategory, User } from "../../utils/types";
import { usersData } from "../../mock/users";
import { categories } from "../../mock/categories";
import s from "./about.module.css";


export const About: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllNew, setShowAllNew] = useState(false);
  const [showAllFiltered, setShowAllFiltered] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    mode: "all",
    gender: null,
    city: null,
    skillIds: [],
  });

  const [categoriesTree, setCategoriesTree] = useState<
    (Category & { subcategories: Subcategory[] })[]
  >([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    try {
      setUsers(usersData);
      setCategoriesTree(categories);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      // Фильтр по полу
      if (filters.gender && user.gender !== filters.gender) return false;

      // Фильтр по городу
      if (filters.city && user.location !== filters.city) return false;

      // Фильтр по навыкам — только если выбраны какие-то skillIds
      if (filters.skillIds.length > 0) {
        const hasWantedSkill = user.subcategoriesWantToLearn.some((s) =>
          filters.skillIds.includes(s.id)
        );
        const hasTeachSkill = filters.skillIds.includes(user.skillCanTeach.subcategoryId);

        if (filters.mode === "wantToLearn") {
          return hasWantedSkill;
        }
        if (filters.mode === "canTeach") {
          return hasTeachSkill;
        }
        if (filters.mode === "all") {
          // В режиме "Все" — достаточно совпадения по хотя бы одному направлению
          return hasWantedSkill || hasTeachSkill;
        }
      }

      return true;
    });
  }, [users, filters]);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  const sortedUsers = [...users].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const visibleUsersNew = showAllNew ? sortedUsers : sortedUsers.slice(0, 3);

  const visibleUsersFiltered = showAllFiltered
    ? filteredUsers
    : filteredUsers.slice(0, 3);

  const filtersProps: FilterSidebarProps = {
    filters,
    onChange: setFilters,
    categoriesTree,
    cities: [...new Set(users.map((u) => u.location))],
  };

  return (
    <>
      <div className={s.filteredCards}>
        <FilterSidebar {...filtersProps} />
        {/* <div className={s.usersGrid}>
          <div className={s.showAllHeader}>
            <h3 className={s.showAllTitle}>Новые</h3>
            {users.length > 3 && (
              <button
                className={s.showAllButton}
                onClick={() => setShowAllNew((prev) => !prev)}
              >
                <span>{showAllNew ? "Скрыть" : "Смотреть все"}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.68983 20C8.51449 20 8.33915 19.9354 8.20072 19.797C7.93309 19.5293 7.93309 19.0864 8.20072 18.8187L14.2177 12.8017C14.6607 12.3588 14.6607 11.6389 14.2177 11.196L8.20072 5.17895C7.93309 4.91132 7.93309 4.46835 8.20072 4.20072C8.46835 3.93309 8.91132 3.93309 9.17895 4.20072L15.196 10.2177C15.6666 10.6884 15.9342 11.3252 15.9342 11.9988C15.9342 12.6725 15.6758 13.3093 15.196 13.78L9.17895 19.797C9.04052 19.9262 8.86518 20 8.68983 20Z"
                    fill="#253017"
                  />
                </svg>
              </button>
            )}
          </div>
          {visibleUsersNew.map((user, i) => (
            <PersonCard
              key={user.id}
              user={user}
              i={i}
              currentUserId={currentUser?.id}
              onLike={handleLike}
            />
          ))}
        </div>

        <div className={s.usersGrid}>
          <div className={s.showAllHeader}>
            <h3 className={s.showAllTitle}>Отфильтрованные</h3>
            {users.length > 3 && (
              <button
                className={s.showAllButton}
                onClick={() => setShowAllFiltered((prev) => !prev)}
              >
                <span>{showAllFiltered ? "Скрыть" : "Смотреть все"}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.68983 20C8.51449 20 8.33915 19.9354 8.20072 19.797C7.93309 19.5293 7.93309 19.0864 8.20072 18.8187L14.2177 12.8017C14.6607 12.3588 14.6607 11.6389 14.2177 11.196L8.20072 5.17895C7.93309 4.91132 7.93309 4.46835 8.20072 4.20072C8.46835 3.93309 8.91132 3.93309 9.17895 4.20072L15.196 10.2177C15.6666 10.6884 15.9342 11.3252 15.9342 11.9988C15.9342 12.6725 15.6758 13.3093 15.196 13.78L9.17895 19.797C9.04052 19.9262 8.86518 20 8.68983 20Z"
                    fill="#253017"
                  />
                </svg>
              </button>
            )}
          </div>
          {visibleUsersFiltered.map((user, i) => (
            <PersonCard key={user.id} person={user} />
          ))}
        </div> */}
      </div>
    </>
  );
};
