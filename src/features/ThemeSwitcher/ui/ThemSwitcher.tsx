import { useTheme } from "@/shared/lib/theme";
import Button from "@/shared/ui/Button/Button";

import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className={styles.btn} onClick={toggleTheme}>
      {theme === "light" ? "☾" : "☀"}
    </Button>
  );
};

export default ThemeSwitcher;
