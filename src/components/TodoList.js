import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ setTodos, todos }) {
  return (
    <div className="tasks">
      {todos.map((todo) => (
        <TodoItem key={todo.id} setTodos={setTodos} todos={todos} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
