import React from "react";
import { db } from "../firebase_config";

function TodoItem({ todo, inprogress, id }) {
  const IsPrigress = () => {
    db.collection("todo").doc(id).update({
      inprogress: !inprogress,
    });
  };

  const deleteTodo = () => {
    db.collection("todo").doc(id).delete();
  };

  return (
    <div className={`item ${inprogress ? "completed" : ""}`}>
      <p>{todo}</p>
      <div className="item-btn">
        <i onClick={IsPrigress} className="fa-solid fa-pen-to-square"></i>
        <i onClick={deleteTodo} className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}

export default TodoItem;
