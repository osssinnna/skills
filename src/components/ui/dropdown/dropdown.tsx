import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import s from "./dropdown.module.css";
import { Checkbox } from "../checkbox/checkbox";
import type { Props } from "./types";
import up from "../../../assets/icon-up.svg";
import down from "../../../assets/icon-down.svg";

export const Dropdown = ({
  label,
  placeholder,
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

  const toggle = (id: string) => {
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

  const allOptions = options ?? groups?.flatMap((g) => g.options) ?? [];

  const firstLabel = allOptions.find((o) => o.id === selectedIds[0])?.label;

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
        </button>

        {open && (
          <div className={clsx(s.categoryGroup, s.categoryGroupActive)}>
            {groups
              ? groups.map((g) => (
                  <div key={g.id} className={s.categorySubGroup}>
                    <div className={s.categoryTitle}>{g.label}</div>
                    {g.options.map((o) => (
                      <Checkbox
                        key={o.id}
                        id={o.id}
                        label={o.label}
                        checked={selectedIds.includes(o.id)}
                        onChange={() => toggle(o.id)}
                        disabled={disabled}
                        withoutIcon={withoutIcon}
                      />
                    ))}
                  </div>
                ))
              : options?.map((o) => (
                  <Checkbox
                    key={o.id}
                    id={o.id}
                    label={o.label}
                    checked={selectedIds.includes(o.id)}
                    onChange={() => toggle(o.id)}
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
