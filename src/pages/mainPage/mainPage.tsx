import { useEffect } from "react";
import { CardSection } from "../../components/card-section/card-section";
import { useDispatch, useSelector } from "../../services/store";
import {
  selectFilters,
  selectNewUsers,
  selectPopularUsers,
  selectUsers,
} from "../../services/usersSlice/selectors";
import { fetchUsers, setFilters } from "../../services/usersSlice/usersSlice";
import style from "./mainPage.module.css";

function MainPage() {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const filters = useSelector(selectFilters);

  const popularUsers = useSelector(selectPopularUsers);
  const newUsers = useSelector(selectNewUsers);

  let filtersCheck: boolean = false;

  useEffect(() => {
    dispatch(fetchUsers());
    // dispatch(
    //   setFilters({
    //     gender: "Женский",
    //   })
    // );
  }, [dispatch]);

  filtersCheck =
    filters.mode === "all" &&
    filters.gender === null &&
    filters.city === null &&
    filters.subcategoryIds.length === 0 &&
    filters.categoryIds.length === 0;

  return (
    <>
      {filtersCheck && (
        <section className={style.section}>
          <CardSection
            title="Популярные"
            users={popularUsers}
            maxPreviewCount={3}
          ></CardSection>
          <CardSection
            title="Новые"
            users={newUsers}
            maxPreviewCount={3}
          ></CardSection>
          <CardSection
            title="Рекомендумые"
            users={users}
            maxPreviewCount={9}
          ></CardSection>
        </section>
      )}
      {!filtersCheck && (
        <CardSection
          title="Новые"
          users={users}
          maxPreviewCount={12}
        ></CardSection>
      )}
    </>
  );
}

export default MainPage;
