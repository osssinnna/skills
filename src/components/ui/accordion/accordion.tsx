import { useState, type FC } from "react";
import styles from "./accordion.module.css";
import { CheckBoxUI } from "../checkbox/index";
import opened from "../accordion/assets/images/opened.svg";
import closed from "../accordion/assets/images/closed.svg";
import { IconButtonUI } from "../iconButton/iconButton";
import clsx from "clsx";

type TItemChecbox = {
  id: string;
  label: string;
  isActive: boolean;
};

type AccordionCheckboxProps = {
  label: string; //текст аккордеона
  isActive: boolean; //активность галочки самого аккордиона
  onChange: () => void; // для выбора всех под чекбоксов
  items: TItemChecbox[]; //чекбоксы внутри аккордеона
  onItemChange: (id: string) => void; // обработчик изменения состояния внутреннего чекбокса
};

export const AccordionUI: FC<AccordionCheckboxProps> = ({
  label,
  isActive,
  onChange,
  items,
  onItemChange,
}) => {
  const [isOpened, toggleItems] = useState(false);
  const handleSetItems = () => {
    toggleItems(!isOpened);
  };
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionPanel}>
        <CheckBoxUI
          aria-expanded={isActive}
          label={label}
          variant={"accordion"}
          isActive={isActive}
          groupName={label}
          onChange={onChange}
          id={"_"}
        />
        <IconButtonUI
          onClick={handleSetItems}
          isActive={isOpened}
          icon={closed}
          iconActive={opened}
        />
      </div>
      <ul
        className={clsx(
          styles.accordionContent,
          isOpened && styles.accordionContentOpen
        )}
        aria-hidden={!isOpened}
      >
        {items.map((item) => (
          <li className={styles.accordionItem} key={item.id}>
            <CheckBoxUI {...item} onChange={() => onItemChange(item.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
