import TodoItem from "./ToDoItem";
import { useContext } from "react";
import { TodoContext } from "./Contexts/ToDoContext";

const CompletedList = () => {
  const { completedTodos } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {!!completedTodos.length ? (
          completedTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        ) : (
          <h3>List is empty</h3>
        )}
      </ul>
    </div>
  );
};

export default CompletedList;
