import React from "react";

function TodoItem({ setTodos, todos, todo }) {
  const deleteHandler = (e) => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = (e) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={`item ${todo.completed ? "completed" : ""}`}>
      <p>{todo.text}</p>
      <div className="item-btn">
        <i onClick={completeHandler} className="fa-solid fa-pen-to-square"></i>
        <i onClick={deleteHandler} className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}

export default TodoItem;
