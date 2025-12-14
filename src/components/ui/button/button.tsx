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

type TCustomSettingBtn = {
  horizontalPadding?: string,
  verticalPadding?: string
}

export const ButtonUI: FC<TButtonUIProps & TCustomSettingBtn> = ({
  children, 
  color, 
  fulsSize = false, 
  disabledToggle = false, 
  onClick,   
  horizontalPadding ='',
  verticalPadding = ''
}) => {
  const styleHorizonPadding  = horizontalPadding ? {'--btn-padding-horizontal': horizontalPadding} : undefined;
  const styleVerticalPadding  = verticalPadding ? {'--btn-padding-vertical': verticalPadding} : undefined;
  const customStyle = {
    ...styleHorizonPadding,
    ...styleVerticalPadding 
  } as React.CSSProperties
  const className = clsx(
    styles.button,
    color === 'primary' ? styles.buttonPrimary : styles.buttonSecondary,
    fulsSize ? styles.buttonFullSize : ''
  )
  return <button style={customStyle} onClick={onClick} disabled={disabledToggle} className={className}>{children}</button>;
};