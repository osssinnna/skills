import type { FC } from 'react';
import styles from './logo.module.css';
import logo from './logo.svg';

export const LogoUI: FC = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.logoIcon}>
        <img src={logo} alt="SkillSwap" />
      </span>
      <span className={styles.logoText}>SkillSwap</span>
    </div>
  );
};