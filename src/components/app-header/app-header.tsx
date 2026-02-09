import { type FC } from "react";
import { AppHeaderUI } from "../ui/app-header";
import { useSelector } from "../../services/store";
import {
  selectIsAuthChecked,
  selectIsAuthenticated,
  selectUserAvatar,
  selectUserName,
} from "../../services/currentUserSlice/selectors";

export const AppHeader: FC = () => {
  const isAuthChecked = useSelector(selectIsAuthChecked);
  const isAuth = useSelector(selectIsAuthenticated);
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);

  if (!isAuthChecked) {
    return <AppHeaderUI isAuth={false} userName="" userAvatar="" />;
  }

  return (
    <AppHeaderUI
      userName={userName || ""}
      userAvatar={userAvatar || ""}
      isAuth={isAuth}
    />
  );
};
