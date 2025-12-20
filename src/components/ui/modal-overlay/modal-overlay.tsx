import styles from './modal-overlay.module.css';

export const ModalOverlayUI = ({ onClick }: { onClick: () => void }) => (
  <div aria-hidden='true' className={styles.overlay} onClick={onClick} />
);
