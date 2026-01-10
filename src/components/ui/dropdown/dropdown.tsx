import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import s from "./dropdown.module.css";
import { CheckBoxUI } from "../checkbox";
import type { Props } from "./types";
import up from "../../../assets/icon-up.svg";
import down from "../../../assets/icon-down.svg";

export const Dropdown = ({
  label,
  placeholder,
  error,
  options,
  groups,
  selectedIds,
  multiple = false,
  disabled = false,
  withoutIcon = false,
  onChange,
}: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* ===== close on outside click ===== */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (id: number) => {
    if (multiple) {
      onChange(
        selectedIds.includes(id)
          ? selectedIds.filter((i) => i !== id)
          : [...selectedIds, id]
      );
    } else {
      onChange(selectedIds[0] === id ? [] : [id]);
      setOpen(false);
    }
  };

  const allOptions = options ?? groups?.flatMap((group) => group.options) ?? [];

  const firstLabel = allOptions.find((option) => option.id === selectedIds[0])?.label;

  const moreCount = selectedIds.length - 1;

  return (
    <div ref={ref} className={s.dropdown}>
      <div className={s.dropdownLabel}>{label}</div>

      <div className={s.dropdownMenu}>
        <button
          type="button"
          disabled={disabled}
          className={clsx(
            s.moreButton,
            open && s.moreButtonActive,
            error && s.error,
            selectedIds.length > 0 && s.checked
          )}
          onClick={() => setOpen((p) => !p)}
        >
          <span>
            {selectedIds.length
              ? moreCount > 0
                ? `${firstLabel}, +${moreCount}`
                : firstLabel
              : placeholder}
          </span>
          {open ? <img src={up} /> : <img src={down} />}
          {error && <div className={s.errorText}>{error}</div>}
        </button>

        {open && (
          <div className={clsx(s.categoryGroup, s.categoryGroupActive)}>
            {groups
              ? groups.map((group) => (
                  <div key={group.id} className={s.categorySubGroup}>
                    <div className={s.categoryTitle}>{group.label}</div>
                    {group.options.map((option) => (
                      <CheckBoxUI
                        key={option.id}
                        id={String(option.id)}
                        label={option.label}
                        checked={selectedIds.includes(option.id)}
                        onChange={() => toggle(option.id)}
                        disabled={disabled}
                        withoutIcon={withoutIcon}
                      />
                    ))}
                  </div>
                ))
              : options?.map((option) => (
                  <CheckBoxUI
                    key={option.id}
                    id={String(option.id)}
                    label={option.label}
                    checked={selectedIds.includes(option.id)}
                    onChange={() => toggle(option.id)}
                    disabled={disabled}
                    withoutIcon={withoutIcon}
                  />
                ))}
          </div>
        )}
      </div>
    </div>
  );
};
