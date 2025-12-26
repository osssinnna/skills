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
  
  return (
    <div className={styles.listContainer} >
        <div className={styles.listMain}>
          <h2 className={styles.messagesListTitle}>{title}</h2>
          <button onClick={onClick} className={styles.messageListBtn}>
             {textButton}
          </button>
        </div>
        
        <ul className={styles.messagesList}>
          {
            messages.map((message) => (
              <li key={message.userId}>
                <MessageItem key={message.userId} {...message}/>
              </li>
               
            ))
          }
        </ul>
    </div>
  )
}