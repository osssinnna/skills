import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectUserById } from "../../services/usersSlice/selectors";
import { UserCardExpanded } from "../../components/userCardExpanded";

export default function UserExpandedPage() {
  const { id } = useParams<{ id: string }>();

  const userId = useMemo(() => {
    const n = Number(id);
    return Number.isFinite(n) ? n : null;
  }, [id]);

  const user = useSelector((state) =>
    userId === null ? null : selectUserById(state, userId)
  );

  if (userId === null) return <div>Некорректный id</div>;
  if (!user) return <div>Пользователь не найден</div>;

  return <UserCardExpanded user={user} />;
}
