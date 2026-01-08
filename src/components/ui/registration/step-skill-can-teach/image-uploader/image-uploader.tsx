import { useRef, useState } from "react";
// import { ButtonUI } from "../../../button/button";
import { Input } from "../../../input";
import s from "./image-uploader.module.css";
import clsx from "clsx";
import add from "../../../../../assets/gallery-add.svg";

type Props = {
  images: string[];
  onAdd: (src: string) => void;
  onRemove: (index: number) => void;
};

export const ImageUploader = ({ images, onAdd, onRemove }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const urlInputRef = useRef<HTMLInputElement>(null);

  // Состояние для визуального выделения при drag over
  const [isDragOver, setIsDragOver] = useState(false);

  // Общий обработчик добавления файла (из input или drop)
  const addFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Пожалуйста, загрузите изображение");
      return;
    }
    const src = URL.createObjectURL(file);
    onAdd(src);
  };

  // Обработчик выбора файла через Input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) addFile(file);
  };

  // Drag & Drop обработчики
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length === 0) {
      alert("Пожалуйста, перетащите изображения");
      return;
    }

    imageFiles.forEach(addFile);
  };

  // Добавление по ссылке
  // const handleAddUrl = () => {
  //   const url = urlInputRef.current?.value.trim();
  //   if (url) {
  //     onAdd(url);
  //     if (urlInputRef.current) urlInputRef.current.value = "";
  //   }
  // };

  // const handleUrlKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") handleAddUrl();
  // };

  return (
    <div className={s.imageUploader}>
      {/* Зона drag & drop + клик для открытия выбора файла */}
      <div
        className={clsx(s.dropZone, isDragOver && s.dropZoneActive)}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()} // Клик по зоне открывает выбор
      >
        <p className={s.dropText}>
          {isDragOver
            ? "Отпустите, чтобы добавить"
            : "Перетащите или выберите изображения навыка"}
        </p>
        <p className={s.addContainer}>
          <img src={add} alt="Добавить изображение" />{" "}
          <span className={s.textInput}>Выбрать изображение</span>{" "}
        </p>

        {/* Скрытый input type="file" */}
        <Input
          ref={fileInputRef}
          label=""
          name="file-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className={s.hiddenInput}
        />
      </div>

      {/* Добавление по ссылке (опционально) */}
      {/* <div className={s.addUrlContainer}>
        <Input
          ref={urlInputRef}
          label="Или вставьте ссылку на изображение"
          name="image-url"
          type="url"
          placeholder="https://example.com/photo.jpg"
          onKeyDown={handleUrlKeyDown}
          onChange={() => {}}
        />
        <ButtonUI type="button" color="secondary" onClick={handleAddUrl}>
          Добавить
        </ButtonUI>
      </div> */}

      {/* Превью загруженных изображений */}
      {images.length > 0 && (
        <div className={s.previewGrid}>
          {images.map((src, index) => (
            <div key={index} className={s.previewItem}>
              <img src={src} alt={`Загружено ${index + 1}`} />
              <button
                type="button"
                className={s.removeBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(index);
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
