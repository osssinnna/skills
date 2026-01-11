import { type FC } from "react";
import { LogoUI } from "../logo/logo";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./authorization-wrapper.module.css";

type AuthorizationWrapperProps = {
  children: React.ReactNode;
};

export const AuthorizationWrapper: FC<AuthorizationWrapperProps> = ({ children }) => {
  return (
    <div className={s.authorizationWrapper}>
      <div className={s.container}>
        <div className={s.header}>
          <NavLink to="/" className={s.logo}>
            <LogoUI />
          </NavLink>

          <NavLink to="/" className={clsx(s.link, s.button, s.buttonSecondary)}>
            <span>Закрыть</span> <span>✕</span>
          </NavLink>
        </div>

        {children}
      </div>
    </div>
  );
};
