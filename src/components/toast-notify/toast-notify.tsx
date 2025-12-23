import { useEffect, useRef, useState, type FC } from 'react';
import { ToastNotifyUI } from '../ui/toast-notify';
import ReactDOM from 'react-dom';
import { clearTimeoutRef } from '../../utils/clear-timeout';

type ToastNotifyProps = {
  id: number,
  pathName: string
  name: string,
}

const toastsRoot = document.getElementById('toasts') ?? document.body;

export const ToastNotify: FC<ToastNotifyProps> = ({ id, pathName, name }) => {
  const [isRender, setRender] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const timeOutRef = useRef<NodeJS.Timeout | null>(null)

  
  
  const handleCloseToast = () => {
    //  просто удаляем класс анимации чтобы завершить ее при удалении
    setVisible(false)
    //  размонтируем
    timeOutRef.current = setTimeout(()=>setRender(false),900)
  };

  

  useEffect(()=>{
    //  создаем кадр анимации при после маунта к-та
      const raf = requestAnimationFrame(()=>{
        setVisible(true)
      });
      return ()=>{
        // при размонтировании очищаем данные анимации из памяти итаймер
        cancelAnimationFrame(raf);
        clearTimeoutRef(timeOutRef);
      }
  },[])
  return (
        <>
         { isRender && (
            ReactDOM.createPortal(
               <ToastNotifyUI  name={name} id={id}  path={pathName} onClose={handleCloseToast} isShowToastAnim={isVisible}/>,
               toastsRoot
            )
            
          )}
           
        </>
  );
};