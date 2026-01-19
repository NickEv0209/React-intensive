import { useState } from "react";

import Button from "@/shared/ui/Button/Button";
import { Modal } from "@/shared/ui/Modal";
import ThemeSwitcher from "@/features/ThemeSwitcher/ui/ThemSwitcher";

import styles from "./Header.module.css";
import UserTabs from "../UserTabs/ui/UserTabs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>Список постов</h1>
      <UserTabs userId={1}/>
      <div className={styles.buttonBlock}>
        <Button onClick={handleToggleModal}>О проекте</Button>
        <ThemeSwitcher />
      </div>
      <Modal isOpen={isOpen} onClose={handleToggleModal}>
        <Modal.Header title={'О проекте'}/>
        <Modal.Body>
          <p>Учебный проект с отрисовкой постов</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleToggleModal}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Header;
