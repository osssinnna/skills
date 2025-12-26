import type { FC } from 'react';
import styles from './messages-list.module.css';
import { useDispatch } from '../../../services/store';
import { MessagesListUI } from '../ui/messages-list/messages-list';
import type { TMessageProps } from '../message-item/message-item';

export type TMessagesListProps = {
  title: string,
  messages: TMessageProps[],
  onClick: () => void
}


export const MessagesList:FC<TMessagesListProps> = ({
  title,
  messages,
  //  проблемас датой ??  https://chatgpt.com/c/694d3875-4a4c-8331-bed9-7e78e0f5e806
  //  прочитать все либо очистить  функция обработчик
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
      } else {
        //  отмечаем новые как просмотренные
      }
    }
    return <MessagesListUI title={title} messages={messages} onClick={handleMessagesClick} textButton={textForBtn}/>
}