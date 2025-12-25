import { useEffect } from "react";
import { CardSection } from "../../components/card-section/card-section";
import { useDispatch, useSelector } from "../../services/store";
import {
  selectFilters,
  selectUsers,
} from "../../services/usersSlice/selectors";
import { fetchUsers } from "../../services/usersSlice/usersSlice";

function MainPage() {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <CardSection title="Тест" users={users} maxPreviewCount={3}></CardSection>
    </>
  );
}

export default MainPage;
