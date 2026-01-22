import { useGetTodosQuery } from "@/entities/todo/api/todosApi";
import type { TodoType } from "@/entities/todo/model/types";
import { TodoListWithLoading } from "@/widgets/TodoList";

const UserTodoPage = () => {
  const { data: todos, isLoading } = useGetTodosQuery(1);

  return (
    <TodoListWithLoading isLoading={isLoading} todos={todos as TodoType[]} />
  );
};

export default UserTodoPage;
