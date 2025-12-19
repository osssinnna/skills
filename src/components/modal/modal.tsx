import { useCallback, useEffect, useRef, useState, type FC } from 'react';
import { ModalUI } from '../ui/modal/';
import ReactDOM from 'react-dom';




type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const modalRoot = document.getElementById('modals') ?? document.body;

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  const modalUIRef =useRef<HTMLDivElement>(null);
  const timeoutRef =useRef<NodeJS.Timeout | null>(null);
  const [isShowModal, setIsShowModal] = useState(false);
  // работа анимации
  useEffect(() => {
    timeoutRef.current = setTimeout(() => setIsShowModal(true));
    
    return () => {
      //  очистка интервала
      if( timeoutRef.current){
          clearTimeout(timeoutRef.current);
      }
      
    }
  }, []);
  
   const handleClose = useCallback(() => {
      //  для анимации при закрытии мо
      setIsShowModal(false);
      if(timeoutRef.current){
        clearTimeout(timeoutRef.current);
      }
      //  закрываем модал c небольшим таймером чтобы аним закр успела сработать перед разм комп
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
      if(timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  },[handleClose]);

  // установка фокуса(полезно для доступности)

  useEffect(() =>{
  // чтобы скринридер знал,что фокус переместился в модалку
    if(!modalUIRef.current) return;
        modalUIRef.current?.focus();

  //  блокируем скролл при откр модалке
  // сохр тек значение 
   const currentOverflowBody = document.body.style.overflow;
  //  блок скролл
  document.body.style.overflow = 'hidden';
    // при размотировании убираем hidden и таймер 
    return () => {
      document.body.style.overflow = currentOverflowBody;
       if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  },[])

  return ReactDOM.createPortal(
    <ModalUI isShowModalAnim={isShowModal} ref={modalUIRef} onClose={handleClose}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  )
}

