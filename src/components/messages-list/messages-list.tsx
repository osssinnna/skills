import type { FC } from 'react';
import { useDispatch } from '../../services/store';
import { MessagesListUI } from '../ui/messages-list/messages-list';
import type { TMessageProps } from '../message-item/message-item';

export type TMessagesListProps = {
  title: string,
  messages: TMessageProps[],
}


export const MessagesList:FC<TMessagesListProps> = ({
  title,
  messages,
  //  если нету -рендерим что ничего нет
  }) => {
    const dispatch = useDispatch();
    //  проверим просмотренные или новые сообщения
    const isViewedAllMessages = messages.every((message)=>{
      return message.viewed === true;
    });
    const textForBtn = isViewedAllMessages  ? 'Очистить' : 'Прочитать все';
    const handleMessagesClick = () => {
      if(isViewedAllMessages) {
        // очистить недавно просмотренные
        messages.forEach((message) => {
          // dispatch(clerRecentlyViewed(message.userId))
        })
      } else {
        //  отмечаем новые как просмотренные
        messages.forEach((message) => {
          // dispatch(markAsViewed(message.userId))

        })

      }
    }
    return <MessagesListUI title={title} messages={messages} onClick={handleMessagesClick} textButton={textForBtn}/>
}