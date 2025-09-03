import React from "react";

const Todo = ({ todo, onToggle, onDelete }) => {
  const { id, title, completed } = todo;
  function handleChange() {
    onToggle(id, { title, completed: !completed });
  }

  function handleClick() {
    onDelete(id);
  }
  return (
    <div className={`todo ${completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={completed}
        className="checkbox"
      />
      <label htmlFor="circleCheck"></label>
      <span className={`${completed ? "completed" : ""}`}>{title}</span>
      <button onClick={handleClick} className="trash-icon" aria-label="Hapus">
        <img src="./trash.svg" alt="" className="trash-icon-img" />
      </button>
    </div>
  );
};

export default Todo;
