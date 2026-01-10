import styles from "./Modal.module.css";

export const ModalHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.modalTitle}>{title}</h3>
    </div>
  );
};
