import type { FC } from 'react';
import { ButtonUI } from '../button';
import styles from './message-item.module.css';

type TMessage = {
  title: string;
  comment: string
}
type TMessagePropsUI = {
  userName: string;
  userId: number; // - для перехода на карточку пользователя и отмечания соо как прочитаннок
  date: string; // - дата создания сообщения
  viewed: boolean; // - просмотрено ли сообщение
  onView?: () => void;
  image?: string;
  message: TMessage;
}

export const MessageItemUI:FC<TMessagePropsUI> = ({
  userName,
  userId,
  date,
  viewed,
  onView,
  image,
  message,

  }) => {
   
  return (
    <div className={styles.messageItem} key={String(userId)}>
      <div className={styles.description}>
        <div className={styles.main}>
          <img className={styles.icon} src={image} alt="иконка сообщения о результате предложения" />
          <div className={styles.mainText}>
            <h3 className={styles.title}>
              <span>{userName} </span>
              <span>{message.title}</span>
            </h3>
            <p className={styles.comment}>{message.comment}</p>
          </div>
        </div>
        <time className={styles.date} dateTime={date}>{date}</time>
      </div>
      
      {!viewed && (
        <ButtonUI aria-label={`Перейти к просмотру предложения от ${userName}`} onClick={onView} color={'primary'}>Перейти</ButtonUI>
      )}
    </div>
  )
}