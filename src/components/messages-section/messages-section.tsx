import type { FC } from 'react';
import { MessagesSectionUI } from '../ui/messages-section';
import { useSelector } from '../../services/store';
import type { TMessageNotifying } from '../../utils/types';



export const MessagesSection:FC = () => {
    // const unreadMessages = useSelector(selectUnreadMessages)
    // const readMessages = useSelector(selectReadMessages)
    //  временная заглушка
    const readMessages = [] as TMessageNotifying[];
    const unreadMessages = [] as TMessageNotifying[];

  return <MessagesSectionUI unreadMessages={unreadMessages} readMessages={readMessages}/>
}