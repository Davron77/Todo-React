import React from "react";

function TodoForm({ setTextInput, textInput, todos, setTodos }) {
  const textInputHandler = (e) => {
    console.log(e.target.value);
    setTextInput(e.target.value);
  };

  const submitTodoHandler = (e) => {
    setTodos([
      ...todos,
      {
        text: textInput,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setTextInput("");
  };

  return (
    <div className="list-head">
      <input
        onChange={textInputHandler}
        value={textInput}
        type="text"
        placeholder="Add..."
        className="entered-list"
      />
      <button onClick={submitTodoHandler} className="add-list">
        {" "}
        Add{" "}
      </button>
    </div>
  );
}

export default TodoForm;
