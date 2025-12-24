import type { FC } from "react";
import { ButtonUI } from "../button";
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
  onView: () => void;
  image: string;
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
      <img className={styles.icon} src={image} alt="иконка сообщения о результате предложения" />
      <div className={styles.description}>
        <h3 className={styles.title}>{`${userName} ${message.title}`}</h3>
        <p className={styles.comment}>{message.comment}</p>
      </div>
      <div className={styles.date}>{date}</div>
      {!viewed && (
        <ButtonUI onClick={onView} color={'primary'}>Перейти</ButtonUI>
      )}
    </div>
  )
}