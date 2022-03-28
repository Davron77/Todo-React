import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ filteredTodos }) {
  return (
    <div className="tasks">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          inprogress={todo.inprogress}
        />
      ))}
    </div>
  );
}

export default TodoList;
