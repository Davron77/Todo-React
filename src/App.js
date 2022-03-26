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

  const textInputHandler = (e) => {
    setTextInput(e.target.value);
    console.log(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todo").add({
      inprogress: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: textInput,
    });

    setTextInput("");
  };

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    db.collection("todo").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  return (
    <div className="App">
      <h1 className="title">To Do List App</h1>
      <div className="todo-list">
        <div className="list-head">
          <input
            onChange={textInputHandler}
            value={textInput}
            type="text"
            placeholder="Add..."
            className="entered-list"
          />
          <button onClick={addTodo} className="add-list">
            {" "}
            Add{" "}
          </button>
        </div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
