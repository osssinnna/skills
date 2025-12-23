import type { FC } from 'react';
import styles from './toast-notify.module.css';
import { Link } from 'react-router-dom';
import  iconSvg  from '../../../assets/toast-notify/notify.svg'
import clsx from 'clsx';

type ToastNotifyUIProps = {
    name: string; //имя предложившего обмен
    id: number // id для перехода при нажатии на кнопку перейти
    onClose?: () => void;
    text?: string,
    icon?: string;
    iconAlt?: string,
    path: string // переход на 'все предложения' обмена
    isShowToastAnim?: boolean
}

export const ToastNotifyUI: FC<ToastNotifyUIProps> = (
  {
    name,
    onClose,
    text = 'предлагает вам обмен',
    icon = iconSvg,
    iconAlt ='иконка уведомления',
    id,
    path,
    isShowToastAnim
  }) => {
  // чтобы не было лишних слешей
  const fullPath = `/${path.replace(/^\//, '')}/${id}`;
  return (
        <div  className={clsx(styles.toast, isShowToastAnim ? styles.toastOpen : '')} role="alert" aria-live="polite" >
            
             <div className={styles.toastContent}>
                <button aria-label="Закрыть уведомление" onClick={onClose} className={styles.buttonClose}>
                    <span aria-hidden={true} className={`${styles.crossIcon}`}></span>
                </button>
                <div className={styles.toastMain}>
                  <img className={styles.toastIcon} src={icon} alt={iconAlt} />
                  <div className={styles.toastMessage}>
                      {`${name} ${text}` }
                  </div>
              
                </div>
                <Link onClick={onClose} aria-label={`Перейти к предложению от ${name}`} className={styles.toastLink} to={fullPath}>Перейти</Link> 
                </div>
        </div>
  );
};