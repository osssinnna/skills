import style from "./profilePage.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { ButtonUI } from "../../components/ui/button";
import { IconButtonUI } from "../../components/ui/iconButton";
import { BirthDatePicker } from "../../components/ui/birth-date-picker";
import { CityAutocomplete } from "../../components/ui/city-autocomplete";
import initAvatar from "../../assets/images/init-avatar.png";
import editIcon from "../../assets/gallery-edit.svg";
import editIconAbout from "../../assets/edit.svg";
import ideaIcon from "../../assets/idea.svg";
import likeIcon from "../../assets/like.svg";
import messageIcon from "../../assets/message-text.svg";
import requestIcon from "../../assets/request.svg";
import userIcon from "../../assets/user.svg";
import calendarIcon from "../../assets/calendar.svg";

import { Dropdown } from "../../components/ui/dropdown";

const initialData = {
  email: "test@mail.com",
  name: "Иван Иванов",
  birthDate: "1995-05-20",
  gender: "Не указан",
  city: "Москва",
  about: "О себе...",
};

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);
  const [activeTab, setActiveTab] = useState("personal");
  const [avatar, setAvatar] = useState(initAvatar);
  const [selectedGenderIds, setSelectedGenderIds] = useState<number[]>([3]); // по умолчанию "Не указан"

  const genderOptions = [
    { id: 1, value: "male", label: "Мужской" },
    { id: 2, value: "female", label: "Женский" },
    { id: 3, value: "other", label: "Не указан" },
  ];

  const handleTabClick = (tab: string) => {
    if (tab === "favorites" || tab === "skills") {
      navigate("/");
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

  const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";

    setFormData((prev) => ({
      ...prev,
      about: textarea.value,
    }));
  };

  useEffect(() => {
    const selected = genderOptions.find((opt) =>
      selectedGenderIds.includes(opt.id)
    );
    setFormData((prev) => ({
      ...prev,
      gender: selected?.value || "other",
    }));
  }, [selectedGenderIds]);

  return (
    <>
      <div className={style.profileContainer}>
        <aside className={style.sidebar}>
          <button
            disabled
            className={activeTab === "applications" ? style.activeTab : ""}
          >
            <img src={requestIcon} alt="" className={style.sidebarIcon} />
            Заявки
          </button>
          <button
            disabled
            className={activeTab === "exchanges" ? style.activeTab : ""}
          >
            <img src={messageIcon} alt="" className={style.sidebarIcon} />
            Мои обмены
          </button>
          <button
            onClick={() => handleTabClick("favorites")}
            className={activeTab === "favorites" ? style.activeTab : ""}
          >
            <img src={likeIcon} alt="" className={style.sidebarIcon} />
            Избранное
          </button>
          <button
            onClick={() => handleTabClick("skills")}
            className={activeTab === "skills" ? style.activeTab : ""}
          >
            <img src={ideaIcon} alt="" className={style.sidebarIcon} />
            Мои навыки
          </button>
          <button
            onClick={() => handleTabClick("personal")}
            className={activeTab === "personal" ? style.activeTab : ""}
          >
            <img src={userIcon} alt="" className={style.sidebarIcon} />
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

                  <div className={style.dateInputWrapper}>
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
                    <button
                      type="button"
                      className={style.calendarButton}
                      onClick={() => {
                        const input = document.querySelector(
                          `.${style.dateInputWrapper} input`
                        ) as HTMLInputElement | null;

                        input?.click();
                      }}
                    >
                      <img src={calendarIcon} alt="Открыть календарь" />
                    </button>
                  </div>
                </div>

                <div className={style.genderDropdown}>
                  <Dropdown
                    label="Пол"
                    placeholder="Выберите пол"
                    options={genderOptions}
                    selectedIds={
                      formData.gender
                        ? [
                            genderOptions.find(
                              (g) => g.value === formData.gender
                            )?.id ?? 3,
                          ]
                        : [3]
                    }
                    multiple={false}
                    onChange={(ids) => setSelectedGenderIds(ids)}
                    withoutIcon={true}
                    error={undefined}
                  />
                </div>
              </div>

              <CityAutocomplete
                value={formData.city}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, city: value }))
                }
                placeholder="Введите город"
                label="Город"
              />

              <div className={style.textareaWrapper}>
                <label htmlFor="about">О себе</label>
                <div className={style.textareaContainer}>
                  <textarea
                    id="about"
                    name="about"
                    value={formData.about}
                    onChange={(e) => {
                      const textarea = e.target;
                      textarea.style.height = "auto";
                      textarea.style.height = textarea.scrollHeight + "px";

                      setFormData((prev) => ({
                        ...prev,
                        about: textarea.value,
                      }));
                    }}
                    placeholder="О себе..."
                    className={style.textarea}
                  />
                  <button
                    type="button"
                    className={style.editTextareaButton}
                    onClick={() => {
                      const textarea = document.getElementById(
                        "about"
                      ) as HTMLTextAreaElement;
                      textarea.focus();
                    }}
                  >
                    <img src={editIconAbout} alt="Редактировать" />
                  </button>
                </div>
              </div>

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
              <img
                src={avatar}
                alt="Аватар пользователя"
                className={style.avatarImage}
              />
              <div
                className={style.avatarEditButton}
                onClick={() => document.getElementById("avatarInput")?.click()}
              >
                <IconButtonUI icon={editIcon} />
              </div>
              <input
                type="file"
                id="avatarInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleAvatarChange}
              />
            </div>
          </form>
        </main>
      </div>
    </>
  );
};
