import { createPortal } from "react-dom";

import styles from "./Modal.module.css";
import Button from "../Button/Button";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ title, description, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  const content = (
    <div className={styles.backLayer} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.modalTitle}>{title}</h3>
        <p className={styles.modalDescription}>{description}</p>
        <Button onClick={onClose} className={styles.btn}>
          Закрыть
        </Button>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default Modal;
