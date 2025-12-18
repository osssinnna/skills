import type { FC } from "react";
import type { TFooterUIProps } from "./type";
import styles from "./footer.module.css";
import { LogoUI } from "../logo";
import down from "../../../assets/icon-down.svg";

export const FooterUI: FC<TFooterUIProps> = ({ links, onAllSkillsClick }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <a href="/" className={styles.logoLink}>
          <LogoUI />
        </a>
      </div>

      {links.map((column, columnIndex) => (
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

