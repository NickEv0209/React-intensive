import { useGetTodosQuery } from "@/entities/todo/api/todosApi";

const UserTodoPage = () => {
  const { data: todos, isLoading } = useGetTodosQuery(1);

  if (isLoading) return <h3>Loading...</h3>;

  return todos?.map((todo) => {
    return <h3 key={todo.id}>{todo.title}</h3>;
  });
};

export default UserTodoPage;
