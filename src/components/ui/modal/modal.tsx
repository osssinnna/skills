import { forwardRef} from "react";
import { ModalOverlayUI } from "../modal-overlay";
import styles from "./modal.module.css";
import clsx from "clsx";


export type ModalUIProps = {
  onClose: () => void
  children: React.ReactNode
  isShowModalAnim: boolean  // для анимации
};

export const ModalUI = forwardRef<HTMLDivElement,ModalUIProps>(({
  onClose,
 children,
 isShowModalAnim
}, ref) => {

  
  return (
    <>
     <div ref={ref} className={clsx(styles.modal, isShowModalAnim ? styles.modalOpen : '')} role='dialog' aria-modal='true' tabIndex={-1}>
        <div className={styles.modalContainer}>
             {children}
        </div>
      
     </div>
     <ModalOverlayUI onClick={onClose} />
    </>
  );
});
