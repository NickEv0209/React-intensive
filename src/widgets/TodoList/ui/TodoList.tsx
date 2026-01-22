import type { TodoType } from "@/entities/todo/model/types"
import { withLoading } from "@/shared/lib/hoc"
import { ItemList } from "@/shared/ui/ItemList/ItemList"
import TodoCard from "@/entities/todo/ui/TodoCard"

import styles from './TodoList.module.css'

interface TodoListProps {
  todos: TodoType[]
}

const TodoList = ({todos}: TodoListProps) => {
  return (
    <div className={styles.todoList}>
      <ItemList items={todos} renderItem={todo => <TodoCard todo={todo}/>}/>
    </div>
  )
}

export const TodoListWithLoading = withLoading(TodoList)
export default TodoList