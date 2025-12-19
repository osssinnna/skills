import { forwardRef} from "react";
import { ModalOverlayUI } from "../modal-overlay";

import styles from "./modal.module.css";


export type ModalUIProps = {
  onClose: () => void
  children: React.ReactNode
};

export const ModalUI = forwardRef<HTMLDivElement,ModalUIProps>(({
  onClose,
 children
}, ref) => {


  return (
    <>
     <div ref={ref} className={styles.modal} role='dialog' aria-modal='true' tabIndex={-1}>
        <div className={styles.modalContainer}>
             {children}
        </div>
      
     </div>
     <ModalOverlayUI onClick={onClose} />
    </>
  );
});
