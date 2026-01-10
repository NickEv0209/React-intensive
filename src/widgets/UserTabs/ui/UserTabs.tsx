import { NavLink } from "react-router-dom";

import styles from "./UserTabs.module.css";

interface UserTabsProps {
  userId: number | string;
}

const UserTabs = ({ userId }: UserTabsProps) => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to={`/users/${userId}/posts`}
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Посты
      </NavLink>
      <NavLink
        to={`/users/${userId}/albums`}
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Альбомы
      </NavLink>
      <NavLink
        to={`/users/${userId}/todos`}
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Задачи
      </NavLink>
    </nav>
  );
};

export default UserTabs;
