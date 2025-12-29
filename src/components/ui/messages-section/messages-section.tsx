import type { FC } from 'react';
import styles from './messages-section.module.css';
import { MessagesList } from '../../messages-list/messages-list';
import type { TMessageNotifying } from '../../../utils/types';
import { forwardRef} from "react";
import clsx from 'clsx';

type TMessagesSectionUIProps = {
  unreadMessages: TMessageNotifying[];
  readMessages: TMessageNotifying[];
  isVisible: boolean;
}



export const MessagesSectionUI = forwardRef<HTMLElement, TMessagesSectionUIProps>(({unreadMessages, readMessages, isVisible}, ref) => {
  const emptyMessage = 'уведомлений о предложениях у вас пока нет';
  const hasMessages = unreadMessages.length > 0 || readMessages.length > 0;
  return (
    <section tabIndex={-1} role="region" aria-hidden={!isVisible} aria-label={'Уведомления о предложениях'} ref={ref} className={clsx(styles.messagesListSection, isVisible ? styles.messagesListSectionOpen : '' )}>
      {hasMessages ? (
      <> 
        {
          unreadMessages.length > 0 ? (
            <MessagesList title="Новые уведомления" messages={unreadMessages} />
          ) : <p className={styles.emptyState}>{`Новых ${emptyMessage}`}</p>
        }
        {
          readMessages.length > 0 ? (
            <MessagesList title="Просмотренные" messages={readMessages} />
          ) :  <p className={styles.emptyState}>{`Просмотренных ${emptyMessage}`}</p>
        }
      </>
      
      ) : 
      <p className={styles.emptyState} role='status'>{emptyMessage[0].toUpperCase()+ emptyMessage.slice(1)}</p>
    }
    </section>
  )
});