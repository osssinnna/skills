import { type FC } from "react";
import { AppHeaderUI } from "../ui/app-header";

export const AppHeader: FC = () => {
  const getInitialUserData = () => {
    const storedUser = localStorage.getItem("user");
    const storedIsAuth = localStorage.getItem("isAuth");

    if (storedIsAuth === "true" && storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        return {
          name: userData.user?.name?.trim(),
          avatarUrl: userData.user?.avatarUrl?.trim(),
          isAuth: true,
        };
      } catch (e) {
        console.error("Ошибка парсинга user из localStorage", e);
      }
    }

    return {
      name: "",
      avatarUrl: "",
      isAuth: false,
    };
  };

  const { name, avatarUrl, isAuth } = getInitialUserData();

  return <AppHeaderUI userName={name} userAvatar={avatarUrl} isAuth={isAuth} />;
};
