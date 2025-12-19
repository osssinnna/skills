import style from "./personCardExpandedUI.module.css";
import { useState } from "react";
import type { FC } from "react";
import type { TPersonCardUIProps, TSubcategoryWantToLearn } from "./type";
import { IconButtonUI } from "../iconButton/iconButton";
import { ButtonUI } from "../button/button";
import { TagSkillUI } from "../tag";
import iconLike from "../../../assets/icon-like.svg";
import iconLikeFilled from "../../../assets/icon-like-filled.svg";
import iconShare from "../../../assets/share.svg";
import iconMoreSquare from "../../../assets/more-square.svg";


const MAX_VISIBLE_TAGS = 4;

export const PersonCardExpandedUI: FC<TPersonCardUIProps> = ({
  person,
  isLiked,
  onLikeToggle,
  onShareToggle,
  onMoreClick,
}) => {
  const images = person.images || [];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const showPrev = () => setSelectedIndex((i) => (i > 0 ? i - 1 : i));
  const showNext = () => setSelectedIndex((i) => (i < images.length - 1 ? i + 1 : i));

  const selectThumbnail = (index: number) => setSelectedIndex(index);

  const firstName = person.name.split(" ")[0];

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
            isActive={isLiked}
            onClick={onLikeToggle}
          />
        </div>

        <div className={style.shareButtom}>
          <IconButtonUI 
            icon={iconShare} 
            isActive={false} 
            onClick={onShareToggle} 
          />
        </div>

        <div className={style.moreButton}>
          <IconButtonUI 
            icon={iconMoreSquare} 
            isActive={false} 
            onClick={onMoreClick}
          />
        </div>
      </div>

      {/* === Секция профиля === */}
        <div className={style.profileCardSection}>
          <div className={style.profileCardContainer}>
            <div className={style.profileCardHeader}>
              <img
                className={style.avatar}
                src={person.avatarUrl}
                alt={person.name}
              />

              <div className={style.profileTextInfo}>
                <h3 className={style.userName}>{firstName}</h3>
                <p className={style.userMeta}>
                {person.location}, {person.age}
                </p>
              </div>
            </div>

            <p className={style.userDescription}>
              {person.skillCanTeach.description}
            </p>

            <div className={style.skillsSection}>
              <h4>Может научить</h4>
              <div className={style.tagsList}>
                <TagSkillUI color="#F7E7F2">
                  {person.skillCanTeach.name}
                </TagSkillUI>
              </div>
            </div>

            <div className={style.learningSection}>
              <h4>Хочет научиться</h4>
              <div className={style.tagsList}>
              {renderWantToLearnTags(person.subcategoriesWantToLearn)}
              </div>
            </div>
          </div>
        </div>

      {/* === Секция навыка + галереи === */}
        <div className={style.skillDetailsSection}>
          <div className={style.skillContent}>
            <h1>{person.skillCanTeach.name}</h1>
            <p className={style.skillCategory}>
            Творчество и искусство / Музыка и звук
            </p>
            <p className={style.skillText}>
            {person.skillCanTeach.description}
            </p>

            <ButtonUI color="primary" fulsSize>
              Предложить обмен
            </ButtonUI>
          </div>

          <aside className={style.gallery}>

            {images.length > 0 && (
              <div className={style.galleryMainImage}>
                <button className={style.galleryNav} onClick={showPrev} aria-label="Previous image" disabled={selectedIndex === 0}>
                ‹
                </button>
                <img src={images[selectedIndex]} alt={`${person.name} image ${selectedIndex + 1}`} />
                <button className={style.galleryNav} onClick={showNext} aria-label="Next image" disabled={selectedIndex === images.length - 1}>
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
                  alt={`${person.name} ${idx + 1}`}
                  className={idx === selectedIndex ? style.thumbnailActive : ''}
                  onClick={() => selectThumbnail(idx)}
                  />
                ))}
              </div>
            )}
          </aside>
        </div>
    </section>
  );
};
