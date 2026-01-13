import type { TAppHeaderUIProps } from "./type";
import styles from "./app-header.module.css";
import { type FC } from "react";
import { LogoUI } from "../logo";
import down from "../../../assets/icon-down.svg";
import like from "../../../assets/icon-like.svg";
import notifications from "../../../assets/icon-notifications.svg";
import theme from "../../../assets/icon-theme.svg";
import clsx from "clsx";
import { IconButtonUI } from "./../iconButton";
import { SearchInput } from "./../../search-input/search-input";
import { NavLink } from "react-router-dom";
import { useSelector } from "../../../services/store";
import { selectCategoriesWithSubCategories } from "../../../services/categoriesSlice/selectors";
import { TabAllSkills } from "../tab-all-skills/tab-all-skills";

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({
  userName,
  userAvatar,
  isAuth,
}) => {
  const categories = useSelector(selectCategoriesWithSubCategories);
  return (
    <>
      <TabAllSkills categories={categories} isOpen={true}></TabAllSkills>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.menu}>
            <NavLink to="/" className={styles.logo}>
              <LogoUI />
            </NavLink>

            <div className={styles.menuItem}>
              <NavLink to="/about" className={styles.link}>
                О проекте
              </NavLink>

              {/* TODO: Это должен быть отдельный компонент */}
              <button className={styles.link}>
                Все навыки
                <img src={down} alt="Открыть категории" />
              </button>
            </div>
          </div>

          <div className={styles.search}>
            <SearchInput />
          </div>

          <div className={clsx(styles.menu, styles.menuRight)}>
            {isAuth ? (
              <>
                <div className={clsx(styles.menu, styles.menuIcons)}>
                  <IconButtonUI icon={theme} />
                  <IconButtonUI icon={notifications} />
                  <IconButtonUI icon={like} />
                </div>

                <a href="/profile" className={styles.profile}>
                  <span className={styles.userName}>{userName}</span>
                  {userAvatar ? (
                    <img
                      src={userAvatar}
                      alt={userName}
                      className={styles.avatar}
                    />
                  ) : (
                    <div className={styles.avatarPlaceholder}>
                      {userName?.[0] ?? "Г"}
                    </div>
                  )}
                </a>
              </>
            ) : (
              <>
                <IconButtonUI icon={theme} />
                <div className={clsx(styles.menu, styles.menuAuth)}>
                  <NavLink
                    to="/register"
                    className={clsx(
                      styles.link,
                      styles.button,
                      styles.buttonSecondary
                    )}
                  >
                    Вход
                  </NavLink>

                  <NavLink
                    to="/register"
                    className={clsx(
                      styles.link,
                      styles.button,
                      styles.buttonPrimary
                    )}
                  >
                    Регистрация
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </nav>
      </header>{" "}
    </>
  );
};
