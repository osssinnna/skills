import type {  FC, ReactNode } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

type TButtonUIProps = {
 children: ReactNode;
 color:'primary' | 'secondary',
 fulsSize?: boolean,
 disabledToggle?: boolean,
 onClick?:() => void,
}

export const ButtonUI: FC<TButtonUIProps> = ({
  children, 
  color, 
  fulsSize = false, 
  disabledToggle = false, 
  onClick,   
}) => {
  const className = clsx(
    styles.button,
    color === 'primary' ? styles.buttonPrimary : styles.buttonSecondary,
    fulsSize ? styles.buttonFullSize : ''
  )
  return <button onClick={onClick} disabled={disabledToggle} className={className}>{children}</button>;
};