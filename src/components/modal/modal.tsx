import { useCallback, useEffect, useRef, useState, type FC } from 'react';
import { clearTimeoutRef } from '../../utils/clear-timeout';
import { ModalUI } from '../ui/modal/';
import ReactDOM from 'react-dom';




type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const modalRoot = document.getElementById('modals') ?? document.body;

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  const modalUIRef =useRef<HTMLDivElement>(null); // реф дляуправление фокусом модалки
  const timeoutRef =useRef<NodeJS.Timeout | null>(null); //таймаут дляустановки флагаанимации
  const [isShowModal, setIsShowModal] = useState(false); // флан анимации
  // работа анимации
  useEffect(() => {
    //  устанавливаем флаг анимации чтобы подставить в модалку нужный класс в необх время
    timeoutRef.current = setTimeout(() => setIsShowModal(true));
     // чтобы скринридер знал,что фокус переместился в модалку
    if(!modalUIRef.current) return;
    // установка фокуса(полезно для доступности)
        modalUIRef.current.focus();

  //  блокируем скролл при откр модалке
  // сохр тек значение 
   const currentOverflowBody = document.body.style.overflow;
  //  блок скролл при открытой модалке
  document.body.style.overflow = 'hidden';
    // при размотировании убираем hidden и таймер 
    
    return () => {
      //  при размонтир след:
      //  1. очистка таймаута если мы перешли по др роуту - размонтировав к-т мо
      clearTimeoutRef(timeoutRef)
      //  2. восстановл стандр body.style.overflow 
      document.body.style.overflow = currentOverflowBody;
    }
  }, []);
  
   const handleClose = useCallback(() => {
      //  для анимации при закрытии мо
      setIsShowModal(false); // удаляем класс для аним
      clearTimeoutRef(timeoutRef) // удаляем  предыдущ таймаут если он был (напр когда открывалось МО)
      //  закрываем модал c небольшим таймером чтобы аним закр(удаление класса modalOpen) успела сработать перед разм комп
      timeoutRef.current = setTimeout(()=>onClose(), 350);
    },[onClose]);
  
  // установка слушателей закр мо
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if(e.key === 'Escape') {
            handleClose();
      }  
    };
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape )
      // при любом размонтировании очищаем таймаут закрытия после отработки функции handleEscape
      clearTimeoutRef(timeoutRef)
    }
  },[handleClose]);

  return ReactDOM.createPortal(
    <ModalUI isShowModalAnim={isShowModal} ref={modalUIRef} onClose={handleClose}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  )
}

