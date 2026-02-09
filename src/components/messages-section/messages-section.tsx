import { useEffect, useRef, useState, type FC } from "react";
import { MessagesSectionUI } from "../ui/messages-section";
import { useSelector } from "../../services/store";
import ReactDOM from "react-dom";
import {
  selectReadMessages,
  selectUnreadMessages,
} from "../../services/messagesSlice/selectors";

const messagesRoot = document.getElementById("messages") ?? document.body;

export const MessagesSection: FC = () => {
  const [isRender, setRender] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  //  для сохранения фокуса предыдущего элемента, кот вызвал открытие этой секции - полезно для доступности
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  const unreadMessages = useSelector(selectUnreadMessages);
  const readMessages = useSelector(selectReadMessages);

  const onCloseAnim = () => {
    //  просто удаляем класс анимации
    setVisible(false);
    //  закрытие окна отрабатывает слушатель секции на соб'transitionend'
  };

  useEffect(() => {
    //  создаем кадр анимации  после маунта к-та
    const raf = requestAnimationFrame(() => {
      setVisible(true);
    });
    // Работа с обработчиками
    // обработка закрытия вне секции

    const handleCloseOutSide = (event: MouseEvent) => {
      if (!sectionRef.current) return;
      const { target } = event;
      //  явдяется ли элемент DOM узлом и не содержит ли его наша секция?
      if (
        target instanceof Node &&
        !sectionRef.current?.contains(target) &&
        event.button === 0
      ) {
        onCloseAnim();
      }
    };
    // обработка кл escape
    const handleCloseEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseAnim();
      }
    };
    // вешаем слушатели клика и esc
    document.addEventListener("keydown", handleCloseEscape);
    //  небольшая задержка при клике  - безопсность - когда окно монтируется по клику на к-л элемент стр
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleCloseOutSide);
    }, 0);

    return () => {
      // при размонтировании
      // удаляем слушатели
      document.removeEventListener("keydown", handleCloseEscape);
      document.removeEventListener("mousedown", handleCloseOutSide);
      //  очищаем таймер и убираем анимацию
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  // useEffect для отработки механики закрытия секции  после анимации закрытия
  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    // фокус для доступности секции
    if (isVisible && sectionElement) {
      //  запоминаем предыдущий сфокусир элемент напр кнопка открытия секции
      lastFocusedElement.current = document.activeElement as HTMLElement;
      //  ставим фокус при открытии секции
      sectionElement.focus();
    } else {
      //  в противном случае снимаем фокус с с секции и переводим его на предыдущий элемент
      lastFocusedElement.current?.focus();
    }
    // обаботчик полного закрытия к-та
    const handleCloseAfterAnim = (e: TransitionEvent) => {
      //  анимация д б связана только с нашей секцией
      if (e.target !== sectionElement) return;
      if (!isVisible) {
        //  если isVisible стало false после отрработки onCloseAnim, то размонтир уомпонент
        setRender(false);
      }
    };
    //  полсе отработки 'transition' удалим элемент физически со стр
    sectionElement.addEventListener("transitionend", handleCloseAfterAnim);
    return () => {
      sectionElement.removeEventListener("transitionend", handleCloseAfterAnim);
    };
    // обязателньо подписаться на изм isVisible
  }, [isVisible]);
  return (
    <>
      {isRender &&
        ReactDOM.createPortal(
          <MessagesSectionUI
            isVisible={isVisible}
            ref={sectionRef}
            unreadMessages={unreadMessages}
            readMessages={readMessages}
          />,
          messagesRoot
        )}
    </>
  );
};
