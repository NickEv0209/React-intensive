import { useId } from "react";
import type { TodoType } from "../model/types";

import styles from "./TodoCard.module.css";

interface TodoCardProps {
  todo: TodoType;
}

const TodoCard = ({ todo }: TodoCardProps) => {
  const id = useId();
  return (
    <div className={styles.todo}>
      <label
        htmlFor={id}
        className={todo.completed ? styles.todoTitleChecked : styles.todoTitle}
      >
        {todo.title}
      </label>
      <input
        type="checkbox"
        name="checkTodo"
        id={id}
        checked={todo.completed}
      />
    </div>
  );
};

export default TodoCard;
