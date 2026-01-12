import React from "react";
import style from "./profilePage.module.css";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { ButtonUI } from "../../components/ui/button";
import { IconButtonUI } from "../../components/ui/iconButton";
import { BirthDatePicker } from "../../components/ui/birth-date-picker";
import { CityAutocomplete } from "../../components/ui/city-autocomplete";
import initAvatar from "../../assets/images/init-avatar.png";
import editIcon from "../../assets/icon-edit.svg";

const initialData = {
  email: "test@mail.com",
  name: "Иван Иванов",
  birthDate: "1995-05-20",
  gender: "male",
  city: "Москва",
  about: "О себе...",
};

export const ProfilePage: React.FC = () => {
  const [formData, setFormData] = useState(initialData);
  const [activeTab, setActiveTab] = useState("personal");
  const [avatar, setAvatar] = useState(initAvatar);

  const handleTabClick = (tab: string) => {
    if (tab === "favorites" || tab === "skills") {
      window.location.href = "/";
      return;
    }
    setActiveTab(tab);
  };
  const isChanged = Object.keys(formData).some(
    (key) =>
      formData[key as keyof typeof formData] !==
      initialData[key as keyof typeof initialData]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className={style.profileContainer}>
        <aside className={style.sidebar}>
          <button
            disabled
            className={activeTab === "applications" ? style.activeTab : ""}
          >
            Заявки
          </button>
          <button
            disabled
            className={activeTab === "exchanges" ? style.activeTab : ""}
          >
            Мои обмены
          </button>
          <button
            onClick={() => handleTabClick("favorites")}
            className={activeTab === "favorites" ? style.activeTab : ""}
          >
            Избранное
          </button>
          <button
            onClick={() => handleTabClick("skills")}
            className={activeTab === "skills" ? style.activeTab : ""}
          >
            Мои навыки
          </button>
          <button
            onClick={() => handleTabClick("personal")}
            className={activeTab === "personal" ? style.activeTab : ""}
          >
            Личные данные
          </button>
        </aside>

        <main className={style.mainContent}>
          <form onSubmit={handleSubmit} className={style.profileForm}>
            <div className={style.formColumn}>
              <Input
                label="Почта"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <button type="button" className={style.changePassword}>
                Изменить пароль
              </button>

              <Input
                label="Имя"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <div className={style.row}>
                <div className={style.column}>
                  <label htmlFor="birthDate">Дата рождения</label>
                  <BirthDatePicker
                    value={
                      formData.birthDate
                        ? new Date(formData.birthDate)
                        : undefined
                    }
                    onChange={(date) =>
                      setFormData((prev) => ({
                        ...prev,
                        birthDate: date.toISOString().split("T")[0],
                      }))
                    }
                  />
                </div>

                <div className={style.column}>
                  <label htmlFor="gender">Пол</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        gender: e.target.value,
                      }))
                    }
                    className={style.select}
                  >
                    <option value="">Выберите пол</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                    <option value="other">Другой</option>
                  </select>
                </div>
              </div>

              <CityAutocomplete
                value={formData.city}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, city: value }))
                }
                placeholder="Введите город"
              />

              <Input
                label="О себе"
                name="about"
                value={formData.about}
                onChange={handleChange}
              />

              <ButtonUI
                type="submit"
                color="primary"
                fullSize
                disabledToggle={!isChanged}
              >
                Сохранить
              </ButtonUI>
            </div>

            <div className={style.avatarColumn}>
              <div className={style.avatarBlock}>
                <img
                  src={avatar}
                  alt="Аватар пользователя"
                  className={style.avatarImage}
                />
                <IconButtonUI
                  icon={editIcon}
                  onClick={() =>
                    document.getElementById("avatarInput")?.click()
                  }
                />
                <input
                  type="file"
                  id="avatarInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleAvatarChange}
                />
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};
