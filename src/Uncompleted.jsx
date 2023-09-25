import TodoItem from "./ToDoItem";
import React, { useContext } from "react";
import { TodoContext } from "./Contexts/ToDoContext";

const UncompletedList = () => {
  const { uncompletedTodos } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {!!uncompletedTodos.length ?
          uncompletedTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />) : <h3>List is empty</h3>}
      </ul>
    </div>
  );
};

export default UncompletedList;
