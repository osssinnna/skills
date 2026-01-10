import type { StepCredentialsUIProps } from ".";
import { ButtonUI } from "../../button/button";
import { Input } from "../../input";
import s from "./step-credentials.module.css";
import google from "../../../../assets/google.svg";
import apple from "../../../../assets/apple.svg";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export const StepCredentialsUI = ({
  values,
  errors,
  currentStep,
  icon,
  showPassword,
  togglePasswordVisibility,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  emailInputRef,
}: StepCredentialsUIProps) => {
  return (
    <div className={s.stepCredentials}>
      <div className={s.socialButtons}>
        <ButtonUI type="button" color="secondary" fullSize>
          <img src={google} className={s.socialIcon} />
          <span>Продолжить с Google</span>
        </ButtonUI>
        <ButtonUI type="button" color="secondary" fullSize>
          <img src={apple} className={s.socialIcon} />
          <span>Продолжить c Apple</span>
        </ButtonUI>
      </div>
      <div className={s.orContainer}>
        <span>или</span>
      </div>
      <form
        className={s.stepContainer}
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Input
          ref={emailInputRef}
          label="Email"
          name="email"
          type="email"
          value={values.email}
          placeholder="Введите email"
          error={errors.email}
          onChange={(e) => {
            onEmailChange(e.target.value);
          }}
          required
        />

        <Input
          label="Пароль"
          name="password"
          type={showPassword ? "text" : "password"}
          value={values.password}
          placeholder="Придумайте надёжный пароль"
          error={errors.password}
          warning={
            values.password && values.password.length < 8
              ? "Пароль должен содержать не менее 8 знаков"
              : undefined
          }
          onChange={(e) => {
            onPasswordChange(e.target.value);
          }}
          required
          icon={icon}
          onClick={togglePasswordVisibility}
        />

        <ButtonUI
          type="submit"
          color="primary"
          fullSize
          disabledToggle={!values.email || values.password.length < 8}
        >
          {currentStep === 1 ? "Далее" : "Войти"}
        </ButtonUI>

        {currentStep !== 1 && (
          <NavLink to="/register" className={clsx(s.link, s.button, s.buttonSecondary)}>
            Зарегистрироваться
          </NavLink>
        )}
      </form>
    </div>
  );
};
