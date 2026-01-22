import { createContext, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

interface ModalContextType {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
  const context = ModalContext;
  if (!context) {
    throw Error("Контекста нет");
  }
  return context;
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalComponent = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;

  const content = (
    <ModalContext.Provider value={{ onClose }}>
      <div className={styles.backLayer} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );

  return createPortal(content, document.body);
};
