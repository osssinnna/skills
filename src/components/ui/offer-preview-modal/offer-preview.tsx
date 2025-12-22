import { useNavigate } from "react-router-dom";

import styles from "./offer-preview.module.css";
import { ButtonUI } from "../button";
import editIcon from "../../../assets/icon-edit.svg";

interface OfferPreviewProps {
  skillName: string;
  skillCategory: string;
  skillSubCategory: string;
  skillDescription: string;
  skillImg: string[];
}

export const OfferPreview = ({
  skillName,
  skillCategory,
  skillSubCategory,
  skillDescription,
  skillImg,
}: OfferPreviewProps) => {
  const navigate = useNavigate();

  if (!Array.isArray(skillImg) || skillImg.length === 0) {
    return null;
  }

  const mainImage = skillImg[0];
  const previewImages = skillImg.slice(1, 4);
  const extraCount = skillImg.length > 4 ? skillImg.length - 4 : 0;

  return (
    <div className={styles.container}>
      {/* Верхний блок */}
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Ваше предложение</h2>
        <p className={styles.headerSubtitle}>
          Пожалуйста, проверьте и подтвердите правильность данных
        </p>
      </div>

      {/* Основной блок */}
      <div className={styles.offer}>
        {/* Левая колонка */}
        <div className={styles.leftColumn}>
          <div className={styles.textBlock}>
            <h1 className={styles.title}>{skillName}</h1>

            <p className={styles.breadcrumbs}>
              {skillCategory} / {skillSubCategory}
            </p>

            <p className={styles.description}>{skillDescription}</p>
          </div>

          <div className={styles.actions}>
            <ButtonUI color="secondary" onClick={() => navigate("/404")}>
              Редактировать
              <img src={editIcon} alt="" />
            </ButtonUI>

            <ButtonUI color="primary" onClick={() => navigate("/404")}>
              Готово
            </ButtonUI>
          </div>
        </div>

        {/* Правая колонка */}
        <div className={styles.rightColumn}>
          <div className={styles.gallery}>
            {/* Главное изображение */}
            <img src={mainImage} alt={skillName} className={styles.mainPhoto} />

            {/* Миниатюры справа */}
            <div className={styles.previewPhotos}>
              {previewImages.map((src, index) => {
                const isLastPreview = index === 2;
                const showOverlay = isLastPreview && extraCount > 0;

                return (
                  <div key={src} className={styles.previewWrapper}>
                    <img src={src} alt="" className={styles.previewPhoto} />

                    {showOverlay && (
                      <div className={styles.moreOverlay}>+{extraCount}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
