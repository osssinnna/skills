import clsx from "clsx";
import s from "./input.module.css";
import type { InputUIProps } from "./type";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, Omit<InputUIProps, "ref">>(
  (
    {
      label,
      name,
      type = "text",
      value = "",
      placeholder,
      error,
      accept,
      warning,
      required,
      isValid,
      multiple,
      className,
      onChange,
      onKeyDown,
    },
    ref
  ) => {
    return (
      <div className={s.formGroup}>
        <label htmlFor={name}>
          {label} {required && "*"}
        </label>

        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          value={type !== "file" ? value : undefined}
          accept={accept}
          placeholder={placeholder}
          required={required}
          multiple={multiple}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={clsx(
            s.inputField,
            error && s.inputError,
            isValid && s.inputSuccess,
            className
          )}
        />

        {error && <div className={s.errorText}>{error}</div>}
        {!error && warning && <div className={s.warningText}>{warning}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";
