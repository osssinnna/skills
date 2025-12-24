import { useRef } from "react";
import { ButtonUI } from "../../../button/button";
import { Input } from "../../../input";
import s from "../step-skill-can-teach.module.css";

type Props = {
  images: string[];
  onAdd: (src: string) => void;
  onRemove: (index: number) => void;
};

export const ImageUploader = ({ images, onAdd, onRemove }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddUrl = (urlValue: string) => {
    if (urlValue.trim()) {
      onAdd(urlValue.trim());
    }
  };

  const handleFileChange = (value: string) => {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const src = URL.createObjectURL(file);
      onAdd(src);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      {/* Загрузка файла */}
      <Input
        ref={fileInputRef}
        label="Выберите файл с изображением"
        name="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      {/* Добавление по ссылке */}
      <div className={s.addImagesContainer}>
        <Input
          label="Ссылка на изображение"
          name="image-url"
          type="url"
          placeholder="https://example.com/photo.jpg"
          onChange={() => {}}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const input = e.target as HTMLInputElement;
              handleAddUrl(input.value);
              input.value = "";
            }
          }}
        />
        <ButtonUI
          type="button"
          color="secondary"
          onClick={() => {
            const input = document.querySelector(
              'input[name="image-url"]'
            ) as HTMLInputElement;
            if (input) {
              handleAddUrl(input.value);
              input.value = "";
            }
          }}
        >
          Добавить
        </ButtonUI>
      </div>

      <div className={s.imageContainerPreview}>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} width={80} />
            <button onClick={() => onRemove(i)}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};
