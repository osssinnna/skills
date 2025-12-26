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
    <section ref={ref} className={clsx(styles.messagesListSection, isVisible ? styles.messagesListSectionOpen : '' )}>
      {hasMessages ? (
      <>
        <MessagesList title="Новые уведомления" messages={unreadMessages} />
        <MessagesList title="Просмотренные" messages={readMessages} />
      </>
      
      ) : 'уведомлений  о новых предложениях пока нет'
    }
    </section>
  )
});