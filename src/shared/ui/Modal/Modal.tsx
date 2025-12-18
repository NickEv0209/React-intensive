import { createPortal } from "react-dom";

import styles from "./Modal.module.css";
import Button from "../Button/Button";
import { useEffect } from "react";

const ESC = "Escape";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ title, description, isOpen, onClose }: ModalProps) => {
  useEffect(() => {
    const handlePressEsc = (e: KeyboardEvent) => {
      if (e.key === ESC) {
        onClose();
      }
    };

    document.addEventListener("keyup", handlePressEsc);

    return () => {
      document.removeEventListener("keyup", handlePressEsc);
    };
  }, [isOpen, onClose]);

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
