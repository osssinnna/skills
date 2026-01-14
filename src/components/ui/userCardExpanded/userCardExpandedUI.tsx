import style from "./userCardExpandedUI.module.css";
import { useState, useEffect } from "react";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import type {
  TUserCardExpandedUIProps,
  TSubcategoryWantToLearn,
} from "./types";
import { IconButtonUI } from "../iconButton/iconButton";
import { ButtonUI } from "../button/button";
import { TagSkillUI } from "../tag";
import iconLike from "../../../assets/icon-like.svg";
import iconLikeFilled from "../../../assets/icon-like-filled.svg";
import iconShare from "../../../assets/share.svg";
import iconMoreSquare from "../../../assets/more-square.svg";

const MAX_VISIBLE_TAGS = 4;

export const UserCardExpandedUI: FC<TUserCardExpandedUIProps> = ({
  user,
  isLiked,
  onLikeToggle,
  onExchangeClick,
}) => {
  const images = user.images || [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const [localLiked, setLocalLiked] = useState<boolean>(isLiked);

  useEffect(() => {
    setLocalLiked(isLiked);
  }, [isLiked]);

  const displayLiked = onLikeToggle ? isLiked : localLiked;

  const showPrev = () => setSelectedIndex((i) => (i > 0 ? i - 1 : i));
  const showNext = () =>
    setSelectedIndex((i) => (i < images.length - 1 ? i + 1 : i));
  const selectThumbnail = (index: number) => setSelectedIndex(index);

  const firstName = user.name.split(" ")[0];

  const renderWantToLearnTags = (subcategories: TSubcategoryWantToLearn[]) => {
    if (subcategories.length <= MAX_VISIBLE_TAGS) {
      return subcategories.map((item) => (
        <TagSkillUI key={item.id} color="#F7E7F2">
          {item.name}
        </TagSkillUI>
      ));
    }

    const visibleTags = subcategories.slice(0, MAX_VISIBLE_TAGS);
    const count = subcategories.length - MAX_VISIBLE_TAGS;

    return (
      <>
        {visibleTags.map((item) => (
          <TagSkillUI key={item.id} color="#F7E7F2">
            {item.name}
          </TagSkillUI>
        ))}
        <TagSkillUI color="#E8ECF7">+{count}</TagSkillUI>
      </>
    );
  };

  return (
    <section className={style.personProfile}>
      {/* Панель иконок над блоками */}
      <div className={style.topActions}>
        <div className={style.likeButton}>
          <IconButtonUI
            icon={iconLike}
            iconActive={iconLikeFilled}
            isActive={displayLiked}
            onClick={() => {
              if (onLikeToggle) {
                onLikeToggle();
              } else {
                setLocalLiked((v) => !v);
              }
            }}
          />
        </div>

        <div className={style.shareButtom}>
          <IconButtonUI
            icon={iconShare}
            isActive={false}
            onClick={() => navigate("/404")}
          />
        </div>

        <div className={style.moreButton}>
          <IconButtonUI
            icon={iconMoreSquare}
            isActive={false}
            onClick={() => navigate("/404")}
          />
        </div>
      </div>

      {/* === Секция профиля === */}
      <div className={style.profileCardSection}>
        <div className={style.profileCardContainer}>
          <div className={style.profileCardHeader}>
            <img
              className={style.avatar}
              src={user.avatarUrl}
              alt={user.name}
            />

            <div className={style.profileTextInfo}>
              <h3 className={style.userName}>{firstName}</h3>
              <p className={style.userMeta}>
                {user.location}, {user.age}
              </p>
            </div>
          </div>

          <p className={style.userDescription}>{user.description}</p>

          <div className={style.skillsSection}>
            <h4>Может научить</h4>
            <div className={style.tagsList}>
              <TagSkillUI color="#F7E7F2">{user.skillCanTeach.name}</TagSkillUI>
            </div>
          </div>

          <div className={style.learningSection}>
            <h4>Хочет научиться</h4>
            <div className={style.tagsList}>
              {renderWantToLearnTags(user.subcategoriesWantToLearn)}
            </div>
          </div>
        </div>
      </div>

      {/* === Секция навыка + галерея === */}
      <div className={style.skillDetailsSection}>
        <div className={style.skillInnerSection}>
          {/* Левая колонка: контент */}
          <div className={style.skillContent}>
            <h1>{user.skillCanTeach.name}</h1>
            <p className={style.skillCategory}>{user.skillCanTeach.category}</p>
            <p className={style.skillText}>{user.skillCanTeach.description}</p>

            <ButtonUI color="primary" fullSize onClick={onExchangeClick}>
              Предложить обмен
            </ButtonUI>
          </div>

          {/* Правая колонка: галерея */}
          <aside className={style.gallery}>
            {images.length > 0 && (
              <div className={style.galleryMainImage}>
                <button
                  className={style.galleryNav}
                  onClick={showPrev}
                  aria-label="Previous image"
                  disabled={selectedIndex === 0}
                >
                  ‹
                </button>
                <img
                  src={images[selectedIndex]}
                  alt={`${user.name} image ${selectedIndex + 1}`}
                />
                <button
                  className={style.galleryNav}
                  onClick={showNext}
                  aria-label="Next image"
                  disabled={selectedIndex === images.length - 1}
                >
                  ›
                </button>
              </div>
            )}

            {images.length > 1 && (
              <div className={style.galleryThumbnails}>
                {images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`${user.name} ${idx + 1}`}
                    className={
                      idx === selectedIndex ? style.thumbnailActive : ""
                    }
                    onClick={() => selectThumbnail(idx)}
                  />
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};
