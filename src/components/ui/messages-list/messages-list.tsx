import type { FC } from 'react';
import styles from './messages-list.module.css';
import type { TMessageProps } from '../../message-item/message-item';
import { MessageItem } from '../../message-item/message-item';

export type TMessagesListUIProps = {
  title: string,
  messages: TMessageProps[],
  onClick: () => void,
  textButton: string
}


export const MessagesListUI:FC<TMessagesListUIProps> = ({
  title,
  messages,
  onClick,
  textButton
  }) => {
    const ariaTitleId = title.startsWith('Новые') ? 'new-message' : 'readedMessages';
    const ariaLabelBtn = title.startsWith('Новые') ? 'Отметить как прочитанные' : 'Убрать прочитанные сообщения из области уведомлений';
  return (
    <div className={styles.listContainer} >
        <div className={styles.listMain}>
          <h2 id={ariaTitleId} className={styles.messagesListTitle}>{title}</h2>
          <button aria-label={ariaLabelBtn} onClick={onClick} className={styles.messageListBtn}>
             {textButton}
          </button>
        </div>
        
        <ul aria-labelledby={ariaTitleId} aria-live='polite' className={styles.messagesList}>
          {
            messages.map((message) => (
              <li key={message.userId}>
                <MessageItem {...message}/>
              </li>
               
            ))
          }
        </ul>
    </div>
  )
}