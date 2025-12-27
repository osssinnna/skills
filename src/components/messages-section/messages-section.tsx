import React, { useEffect, useRef, useState, type FC } from 'react';
import { MessagesSectionUI } from '../ui/messages-section';
import { useSelector } from '../../services/store';
import type { TMessageNotifying } from '../../utils/types';
import ReactDOM from 'react-dom';
import {unreadTestMessages , readTestMessages} from '../ui/messages-section/mock-data';
import { clearTimeoutRef } from '../../utils/clear-timeout';

const messagesRoot = document.getElementById('messages') ?? document.body;

export const MessagesSection:FC = () => {
  const [isRender, setRender] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); //таймаут дляустановки флага анимации
  const sectionRef = useRef<HTMLElement | null>(null);
  // Для REDUX!!!!
  // const unreadMessages = useSelector(selectUnreadMessages)
    // const readMessages = useSelector(selectReadMessages)
    //  временная заглушка - тестовые данные
  const readMessages = [...readTestMessages] as TMessageNotifying[];
  const unreadMessages = [...unreadTestMessages] as TMessageNotifying[];

  const onClose = () => {
    if(!isRender) return;
    // сброс старого состояния таймера
    clearTimeoutRef(timeoutRef)
       //  просто удаляем класс анимации чтобы завершить ее при удалении
    setVisible(false);
    //  закрываем окно
    timeoutRef.current = setTimeout(()=>setRender(false),350);
  }

  useEffect(()=>{
      //  создаем кадр анимации  после маунта к-та
    const raf = requestAnimationFrame(() => {
      setVisible(true);
    })
    // обработка закрытия вне секции

    const handleClick = (event: MouseEvent) => {
        if(!sectionRef.current) return;
        const {target} = event;
        //  явдяется ли элемент DOM узлом и не содержит ли его наша секция?
        if(target instanceof Node && !sectionRef.current?.contains(target)){
          onClose();
        }
    }
    // обработка кл escape
    const handleEscape = (e: KeyboardEvent) => {
      if(e.key === 'Escape') {
          onClose();
      }
    }
    // вешаем слушатели клика и esc
    document.addEventListener('keydown', handleEscape);
    //  небольшая задержка при клике  - безопсность - когда окно монтируется по клику на к-л элемент стр
    const timer = setTimeout(()=>{
        document.addEventListener('mousedown', handleClick);
    },0)
    
    return () => {
      // при размонтировании
      // удаляем слушатели
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClick);
      //  очищаем таймеры и анимацию
      cancelAnimationFrame(raf);
      clearTimeoutRef(timeoutRef);
      clearTimeout(timer);
    }
  },[])


  return <>
            {
              isRender && (
                ReactDOM.createPortal(
                  <MessagesSectionUI isVisible={isVisible} ref={sectionRef} unreadMessages={unreadMessages} readMessages={readMessages}/>,
                  messagesRoot
                )
              )
            }
        </>
  
  

}