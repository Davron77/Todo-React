import { useState } from "react";
import { db } from "../firebase_config";

function TodoItem({ todo, inprogress, id }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const IsPrigress = () => {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  };

  const deleteTodo = () => {
    db.collection("todos").doc(id).delete();
  };

  const editTodo = () => {
    db.collection("todos").doc(id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  const showHideClassName = open ? "modal display-block" : "modal display-none";

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="list-head">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder={todo}
              className="entered-list"
            />
            <button disabled={!input} onClick={editTodo} className="add-list">
              {" "}
              Add{" "}
            </button>
          </div>
        </section>
      </div>
      <div className={`item ${inprogress ? "completed" : ""}`}>
        <p className="todo-text">{todo}</p>
        <div className="item-btn">
          <i onClick={IsPrigress} className="fa-solid fa-check"></i>
          <i onClick={handleOpen} className="fa-solid fa-pen-to-square"></i>
          <i onClick={deleteTodo} className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
