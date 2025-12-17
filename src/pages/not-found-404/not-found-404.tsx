import type { FC } from "react";

import styles from "./not-found-404.module.css";
import { NotFoundImage } from "./not-found-image";
import { ButtonUI } from "../../components/ui/button";

export const NotFound404: FC = () => {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <NotFoundImage />

        <h1 className={styles.title}>Страница не найдена</h1>

        <p className={styles.text}>
          К сожалению, эта страница недоступна. Вернитесь на главную страницу
          или попробуйте позже
        </p>

        <div className={styles.actions}>
          <div className={styles.buttonWrapper}>
            <ButtonUI color="secondary" onClick={() => {}}>
              Сообщить об ошибке
            </ButtonUI>
          </div>

          <div className={styles.buttonWrapper}>
            <ButtonUI color="primary" onClick={() => {}}>
              На главную
            </ButtonUI>
          </div>
        </div>
      </section>
    </main>
  );
};
