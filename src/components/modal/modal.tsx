import { useEffect, useRef, type FC } from 'react';
import { ModalUI } from '../ui/modal/';
import ReactDOM from 'react-dom';




type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const modalRoot = document.getElementById('modals') ?? document.body;

export const Modal: FC<ModalProps> = ({ onClose, children }) => {

  const modalUIRef =useRef<HTMLDivElement>(null);
  // установка слушателей закр мо
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if(e.key === 'Escape') {
              onClose();
      }  
    };
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape )
    }
  },[onClose]);

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
    // при размотировании убираем hidden
    return () => {
      document.body.style.overflow = currentOverflowBody;
    }
  },[])

  return ReactDOM.createPortal(
    <ModalUI ref={modalUIRef} onClose={onClose}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  )
}

