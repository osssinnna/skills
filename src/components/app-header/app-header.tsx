import { type FC } from "react";
import { AppHeaderUI } from "../ui/app-header";

export const AppHeader: FC = () => {
  const name = "Guest"; // заглушка имени
  const avatarUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/African_hawk-eagle_%28Aquila_spilogaster%29.jpg/640px-African_hawk-eagle_%28Aquila_spilogaster%29.jpg"; // заглушка аватарки

  const isAuth = false;

  return (
    <AppHeaderUI
      userName={name}
      userAvatar={avatarUrl}
      isAuthOverride={isAuth} // временно
    />
  );
};
