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
    const hasMessages = unreadMessages.length > 0 || readMessages.length > 0;
  return (
    <section aria-hidden={!isVisible} aria-label={'Уведомления о предложениях'} ref={ref} className={clsx(styles.messagesListSection, isVisible ? styles.messagesListSectionOpen : '' )}>
      {hasMessages ? (
      <> 
        {
          unreadMessages.length > 0 && (
            <MessagesList title="Новые уведомления" messages={unreadMessages} />
          )
        }
        {
          readMessages.length > 0 && (
            <MessagesList title="Просмотренные" messages={readMessages} />
          )
        }
      </>
      
      ) : 
      <p className={styles.emptyState}
        role='status'
      >
        уведомлений  о новых предложениях пока нет
      </p>
  
    }
    </section>
  )
});