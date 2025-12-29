import { useEffect, useRef, useState, type FC } from 'react';
import { MessagesSectionUI } from '../ui/messages-section';
import { useSelector } from '../../services/store';
import type { TMessageNotifying } from '../../utils/types';
import ReactDOM from 'react-dom';
import {unreadTestMessages , readTestMessages} from '../ui/messages-section/mock-data';

const messagesRoot = document.getElementById('messages') ?? document.body;

export const MessagesSection:FC = () => {
  const [isRender, setRender] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  // Для REDUX!!!!
  // const unreadMessages = useSelector(selectUnreadMessages)
    // const readMessages = useSelector(selectReadMessages)
    //  временная заглушка - тестовые данные
  const readMessages = [...readTestMessages] as TMessageNotifying[];
  const unreadMessages = [...unreadTestMessages] as TMessageNotifying[];

  const onCloseAnim = () => {
    //  просто удаляем класс анимации
    setVisible(false);
    //  закрытие окна отрабатывает слушатель секции на соб'transitionend'
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
          onCloseAnim();
        }
    }
    // обработка кл escape
    const handleEscape = (e: KeyboardEvent) => {
      if(e.key === 'Escape') {
          onCloseAnim();
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
      //  очищаем таймер и убираем анимацию
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    }
  },[])

  // useEffect для отработки механики закрытия секции  после анимации закрытия
    useEffect(() => {
      const sectionElement = sectionRef.current;
      if(!sectionElement) return;
      const handleCloseAfterAnim = (e: TransitionEvent) => {
        //  анимация д б связана только с нашей секцией 
        if(e.target !== sectionElement) return;
          if(!isVisible) {
            //  если isVisible стало false после отрработки onCloseAnim, то размонтир уомпонент
            setRender(false);
          }
      }
      //  полсе отработки 'transition' удалим элемент физически со стр  
      sectionElement.addEventListener('transitionend', handleCloseAfterAnim);
      return () => {
        sectionElement.removeEventListener('transitionend', handleCloseAfterAnim);
      };
      // обязателньо подписаться на изм isVisible
    },[isVisible])

    //  фокус для доступности
    useEffect(()=>{
      if(isVisible && sectionRef.current){
        sectionRef.current.focus();
      }
    },[isVisible])


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