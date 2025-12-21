import type { FC } from "react";
import type { TFooterUIProps } from "./type";
import styles from "./footer.module.css";
import { LogoUI } from "../logo";
import down from "../../../assets/icon-down.svg";

const footerLinks = [
  [
    { label: "О проекте", href: "/" },
    { label: "Все навыки", href: "/" },
  ],
  [
    { label: "Контакты", href: "/" },
    { label: "Блог", href: "/" },
  ],
  [
    { label: "Политика конфиденциальности", href: "/" },
    { label: "Пользовательское соглашение", href: "/" },
  ],
];

export const FooterUI: FC<TFooterUIProps> = ({ onAllSkillsClick }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <a href="/" className={styles.logoLink}>
          <LogoUI />
        </a>
      </div>

      {footerLinks.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={styles.column}
          style={{ gridColumn: columnIndex + 2 }}
        >
          {column.map((link, linkIndex) => {
            if (link.label === "Все навыки") {
              return (
                <button
                  key={linkIndex}
                  className={styles.link}
                  onClick={onAllSkillsClick}
                >
                  {link.label}
                  <img src={down} alt="Открыть категории" />
                </button>
              );
            }
            return (
              <a key={linkIndex} href={link.href} className={styles.link}>
                {link.label}
              </a>
            );
          })}
        </div>
      ))}

      <div className={styles.copyright}>SkillSwap — 2025</div>
    </footer>
  );
};
