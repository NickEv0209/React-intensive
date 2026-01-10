import styles from "./Modal.module.css";

export const ModalBody: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.body}>{children}</div>;
};
