import { useRef, useState } from "react";
import s from "./avatar-uploader.module.css";
import clsx from "clsx";
import { Input } from "../../../input";
import avatar from "../../../../../assets/user-avatar.svg";
import add from "../../../../../assets/add.svg";

type Props = {
  avatarUrl: string;
  onChange: (url: string) => void;
};

export const AvatarUploader = ({ avatarUrl, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Пожалуйста, выберите изображение");
      return;
    }
    const url = URL.createObjectURL(file);
    onChange(url);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className={s.container}>
      <div
        className={clsx(s.uploadZone, isDragging && s.dragging)}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragging(false);
        }}
        onDrop={handleDrop}
      >
        {avatarUrl ? (
          <>
            <img src={avatarUrl} alt="Аватар" className={s.preview} />
            <button type="button" className={s.removeBtn} onClick={handleRemove}>
              ✕
            </button>
          </>
        ) : (
          <>
            <img src={avatar} alt="Аватар" className={s.preview} />
            <button type="button" className={s.addBtn}>
              <img src={add} alt="Аватар" className={s.preview} />
            </button>
          </>
        )}

        <Input
          ref={inputRef}
          label=""
          name="avatar-upload"
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className={s.hiddenInput}
        />
      </div>
    </div>
  );
};
