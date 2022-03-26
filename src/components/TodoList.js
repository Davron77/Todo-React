import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ setTodos, todos }) {
  return (
    <div className="tasks">
      {todos.map((todo) => (
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
