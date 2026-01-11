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

const expandedUser = {
  ...user,
  description: "",
  gender: user.gender ?? "Не указан",


  skillCanTeach: {
    id: 0,
    name: user.skillCanTeach.name,
    description: "", 
  },
};

  return <UserCardExpanded user={expandedUser} />;
}
