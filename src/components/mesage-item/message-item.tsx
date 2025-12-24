import type { FC } from "react";
import { MessageItemUI } from '../ui/mesage-item';
import iconMessage from '../../../../assets/notification-panel/icon-message.svg'


type TMessageExhanges = 'confirmed' | 'offered' | 'rejected';

type TMessageProps = {
  userName: string;
  userId: number; // - для перехода на карточку пользователя и отмечания соо как прочитаннок
  date: string; // - дата создания сообщения
  viewed: boolean; // - просмотрено ли сообщение
  onView: () => void;
  typeMessage: TMessageExhanges;
}

type TValuesMessages = Record<TMessageExhanges, {title: string, comment: string}>

export const MessageItem:FC<TMessageProps> = ({
  userName,
  userId,
  date,
  viewed,
  typeMessage,
  }) => {


    const handleViewClick =  () => {

    }
    //  как определить пол человека
    //  логика определения вчера и сегодня по дате
    // const onClose = () => {
    //   // вне блока и по escp  - это для секциии
    // }

    //  определяем содержание сообщения
    const valuesMessages: TValuesMessages = {
        confirmed: { title: 'принял ваш обмен', comment: 'Перейдите в профиль, чтобы обсудить детали'},
        offered: { title: 'предлагает вам обмен', comment: 'Примите обмен, чтобы обсудить детали'},
        rejected: { title: 'отклонил ваш обмен', comment: 'Нажмите подробнее,чтобы посмотреть детали'}, // возможно пригодится и такой вариант
    }
    
    const message = valuesMessages[typeMessage];

    return (
      <MessageItemUI image={iconMessage} userId={userId} userName={userName} message={message}  date={date} onView={handleViewClick} viewed={viewed}/>
    )
}