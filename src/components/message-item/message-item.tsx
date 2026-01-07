import type { FC } from 'react';
import { MessageItemUI } from '../ui/message-item';
import iconMessage from '../../assets/message-item/icon-message.svg'
import { useDispatch } from '../../services/store';
import { useNavigate } from "react-router-dom";
import type { TMessageExhanges ,TMessageNotifying } from '../../utils/types';
import { calcData } from '../../utils/calc-data';
export type TMessageProps = TMessageNotifying;

 //  определяем содержание сообщения уведомления исходя из 'confirmed' | 'offered' | 'rejected';
const valuesMessages: TValuesMessages = {
    confirmed: { title: 'принял ваш обмен', comment: 'Перейдите в профиль, чтобы обсудить детали'},
    offered: { title: 'предлагает вам обмен', comment: 'Примите обмен, чтобы обсудить детали'},
    rejected: { title: 'отклонил ваш обмен', comment: 'Нажмите подробнее,чтобы посмотреть детали'}, // возможно пригодится и такой вариант
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
    //  переход чтобы посмотреь именно новое непросмотренное предложение обмена
    const handleToViewClick =  () => {
      const id = userId
        // dispatch(markAsViewed(message.userId)) //  => расскоментировать когда будет рабоч слайс messagesSlice
        navigate('/404'); // пока заглушка
    }

    //  форматируем дату
    const formattedDate = calcData(date);
    //  определили содержание уведомления
    const message = valuesMessages[typeMessage];

    return (
      <MessageItemUI image={iconMessage} userName={userName} message={message}  date={formattedDate} onView={handleToViewClick} viewed={viewed}/>
    )
}