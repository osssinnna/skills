import type { FC } from 'react';
import styles from './messages-section.module.css';
import { MessagesList } from '../../messages-list/messages-list';
import type { TMessageNotifying } from '../../../utils/types';


type TMessagesSectionUIProps = {
  unreadMessages: TMessageNotifying[];
  readMessages: TMessageNotifying[]
}



export const MessagesSectionUI:FC<TMessagesSectionUIProps> = ({unreadMessages, readMessages}) => {
    const hasMessages = unreadMessages.length > 0 || readMessages.length > 0;
  return (
    <section className={styles.messagesListSection}>
      {hasMessages ? (
      <>
        <MessagesList title="Новые уведомления" messages={unreadMessages} />
        <MessagesList title="Просмотренные" messages={readMessages} />
      </>
      
      ) : 'уведомлений  о новых предложениях пока нет'
    }
    </section>
  )
}