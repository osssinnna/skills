import {  type FC } from 'react';
import styles from './accordion.module.css';
import {CheckBoxUI} from '../checkbox/index';
import type {CheckboxProps} from '../checkbox/checkbox'

type AccordionCheckboxProps = {
  label: string; //текст аккордеона
  isActive: boolean; //активность галочки самого аккордиона
  onChange: () => void; // для выбора всех под чекбоксов
  items: CheckboxProps[]; //чекбоксы внутри аккордеона
  onItemChange: (id: string) => void;  // обработчик изменения состояния внутреннего чекбокса
};


const languages = [
  { id: 1, label: 'Английский', isActive: true },
  { id: 2, label: 'Французский', isActive: false },
  { id: 3, label: 'Немецкий', isActive: false },
];

export const AccordionUI: FC<AccordionCheckboxProps> = ({
  label,
  isActive,
  onChange,
  items,
  onItemChange,
}) => {
     
     
  return (
    <>
      <CheckBoxUI label={label} variant={'accordion'} isActive ={isActive} groupName={label} onChange={onChange}/>
      <ul>
        
        {items.map((item) => (
          <li key={item.label}>
            <CheckBoxUI {...item} onChange={onItemChange}/>
          </li>
        ))}

        


      </ul>
    </>
  )
};



