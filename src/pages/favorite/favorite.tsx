import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "../../services/store";
import type { RootState } from "../../services/store";
import type { User } from "../../utils/types";
import { selectUsers } from "../../services/usersSlice/selectors";
import { fetchUsers } from "../../services/usersSlice/usersSlice";
import { getLikedUsersIds } from "../../utils/liked-users-storage";
import { CardSection } from "../../components/card-section/card-section";
import style from "./favorite.module.css";

function FavoritePage() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers) || [];
  const [likedUsersIds, setLikedUsersIds] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    const updateLikedIds = () => {
      setLikedUsersIds(getLikedUsersIds());
    };

    updateLikedIds();

    const handleLikedUsersChanged = () => {
      updateLikedIds();
    };

    const handleStorageChange = () => {
      updateLikedIds();
    };

    window.addEventListener("likedUsersChanged", handleLikedUsersChanged);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("likedUsersChanged", handleLikedUsersChanged);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const likedUsers = useMemo(() => {
    if (likedUsersIds.length === 0) return [];

    return users.filter((user: User) =>
      likedUsersIds.includes(String(user.id))
    );
  }, [users, likedUsersIds]);

  return (
    <div className={style.container}>
      <CardSection
        title={`Избранное: ${likedUsers.length}`}
        users={likedUsers}
      />
    </div>
  );
}

export default FavoritePage;
