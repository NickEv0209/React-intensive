import styles from "./Modal.module.css";

export const ModalFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles.footer}>
      {children}
    </div>
  )
};
