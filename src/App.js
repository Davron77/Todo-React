import React, { useState, useEffect } from "react";
//Import Css
import "./App.css";
//Import Components
import { db } from "./firebase_config";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Use Effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.inprogress === true));
        break;
      case "uncomleted":
        setFilteredTodos(todos.filter((todo) => todo.inprogress === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const textInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  function getTodos() {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot(function (querySnapshot) {
        setTodos(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            inprogress: doc.data().inprogress,
          }))
        );
      });
  }

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: textInput,
    });

    setTextInput("");
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <h1 className="title">To Do List App</h1>
      <div className="todo-list">
        <div className="todo-header">
          <div className="list-head">
            <input
              onChange={textInputHandler}
              value={textInput}
              type="text"
              placeholder="Add..."
              className="entered-list"
            />
            <button
              disabled={!textInput}
              onClick={addTodo}
              className="add-list"
            >
              {" "}
              Add{" "}
            </button>
          </div>
          <div className="select">
            <select
              onChange={statusHandler}
              name="todos"
              className="filter-todo"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncomleted">Uncomleted</option>
            </select>
          </div>
        </div>
        <TodoList todos={todos} filteredTodos={filteredTodos} />
      </div>
    </div>
  );
}

export default App;
