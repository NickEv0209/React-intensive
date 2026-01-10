import { useState } from "react";

import Button from "@/shared/ui/Button/Button";
import Modal from "@/shared/ui/Modal/Modal";
import ThemeSwitcher from "@/features/ThemeSwitcher/ui/ThemSwitcher";

import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>Список постов</h1>
      <div className={styles.buttonBlock}>
        <Button onClick={handleToggleModal}>О проекте</Button>
        <ThemeSwitcher />
      </div>
      <Modal
        title="О проекте"
        description="Учебный проект с простой отрисовкой постов"
        isOpen={isOpen}
        onClose={handleToggleModal}
      />
    </div>
  );
};

export default Header;
