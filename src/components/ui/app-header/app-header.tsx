import type { TAppHeaderUIProps } from "./type";
import styles from "./app-header.module.css";
import { type FC, useState, useRef, useEffect } from "react";
import { LogoUI } from "../logo";
import down from "../../../assets/icon-down.svg";
import like from "../../../assets/icon-like.svg";
import notifications from "../../../assets/icon-notifications.svg";
import theme from "../../../assets/icon-theme.svg";
import clsx from "clsx";
import { IconButtonUI } from "./../iconButton";
import { SearchInput } from "./../../search-input/search-input";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../../services/store";
import { userLogout } from "../../../services/currentUserSlice/currentUserSlice";
import { selectCategoriesWithSubCategories } from "../../../services/categoriesSlice/selectors";
import { TabAllSkills } from "../tab-all-skills/tab-all-skills";
import { setActiveSection } from "../../../services/usersSlice/usersSlice";

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({
  userName,
  userAvatar,
  isAuth,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectCategoriesWithSubCategories);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const skillsButtonRef = useRef<HTMLButtonElement>(null);
  
  const toggleSkills = () => {
    setIsSkillsOpen(!isSkillsOpen);
  };

  const closeSkills = () => {
    setIsSkillsOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleLogout = () => {
    dispatch(userLogout());
    setIsDropdownOpen(false);
    navigate("/");
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.menu}>
            <NavLink to="/" className={styles.logo}>
              <button onClick={() => dispatch(setActiveSection(null))}>
                <LogoUI />
              </button>
            </NavLink>

            <div className={styles.menuItem}>
              <NavLink to="/about" className={styles.link}>
                О проекте
              </NavLink>

              <button
                ref={skillsButtonRef}
                className={styles.link}
                onClick={toggleSkills}
                aria-expanded={isSkillsOpen}
                aria-label="Открыть все навыки"
              >
                Все навыки
                <img src={down} alt="" />
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
                  <NavLink to="/favorite" className={styles.iconLink}>
                    <IconButtonUI icon={like} />
                  </NavLink>
                </div>

                <div
                  className={styles.profileContainer}
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
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
                  {isDropdownOpen && (
                    <div className={styles.dropdown}>
                      <button
                        className={styles.logoutButton}
                        onClick={handleLogout}
                      >
                        Выйти
                      </button>
                    </div>
                  )}
                </div>
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

          {isSkillsOpen && (
            <div
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <TabAllSkills
                categories={categories}
                isOpen={isSkillsOpen}
                onClose={closeSkills}
                centered={true}
              />
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
