import type { FC } from 'react';
import { MessageItemUI } from '../ui/message-item';
import iconMessage from '../../assets/message-item/icon-message.svg'
import { useDispatch } from '../../services/store';
import { useNavigate } from "react-router-dom";

import { calcData } from '../../utils/calc-data';

type TMessageExhanges = 'confirmed' | 'offered' | 'rejected';

export type TMessageProps = {
  userName: string;
  userId: number; // - для перехода на карточку пользователя и отмечания соо как прочитаннок
  date: string; // - дата создания сообщения
  viewed: boolean; // - просмотрено ли сообщение
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

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //  переход чтобы посмотреь предложение обмена
    const handleToViewClick =  () => {
        // dispatch(markAsViewed(message.userId)) //  => расскоментировать когда будет рабоч слайс messagesSlice
        navigate('/404'); // пока заглушка
    }

    //  форматируем дату
    const formatDate = calcData(date);
    //  определяем содержание сообщения уведомления исходя из 'confirmed' | 'offered' | 'rejected';
    const valuesMessages: TValuesMessages = {
        confirmed: { title: 'принял ваш обмен', comment: 'Перейдите в профиль, чтобы обсудить детали'},
        offered: { title: 'предлагает вам обмен', comment: 'Примите обмен, чтобы обсудить детали'},
        rejected: { title: 'отклонил ваш обмен', comment: 'Нажмите подробнее,чтобы посмотреть детали'}, // возможно пригодится и такой вариант
    }
    
    const message = valuesMessages[typeMessage];

    return (
      <MessageItemUI image={iconMessage} userId={userId} userName={userName} message={message}  date={formatDate} onView={handleToViewClick} viewed={viewed}/>
    )
}