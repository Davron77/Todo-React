import React, { useState, useEffect } from "react";
//Import Css
import "./App.css";
//Import Components
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const getLocalStorage = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

function App() {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState(getLocalStorage);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1 className="title">To Do List App</h1>
      <div className="todo-list">
        <TodoForm
          textInput={textInput}
          setTextInput={setTextInput}
          setTodos={setTodos}
          todos={todos}
        />
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
}

export default App;
