import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./server-error-500.module.css";
import { ServerErrorImage } from "./server-error-500-image";
import { ButtonUI } from "../../components/ui/button";

export const ServerError500: FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <ServerErrorImage />
        <h1 className={styles.title}>На сервере произошла ошибка</h1>
        <p className={styles.text}>
          Попробуйте позже или вернитесь на главную страницу
        </p>
        <div className={styles.actions}>
          <div className={styles.buttonWrapper}>
            <ButtonUI color="secondary" onClick={() => {}}>
              Сообщить об ошибке
            </ButtonUI>
          </div>
          <div className={styles.buttonWrapper}>
            <ButtonUI color="primary" onClick={handleGoHome}>
              На главную
            </ButtonUI>
          </div>
        </div>
      </section>
    </main>
  );
};