import type { PropsWithChildren } from "react";

import styles from "./Modal.module.css";

interface ModalHeaderProps {
  title: string;
}

export const ModalHeader = ({ title }: PropsWithChildren<ModalHeaderProps>) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.modalTitle}>{title}</h3>
    </div>
  );
};
