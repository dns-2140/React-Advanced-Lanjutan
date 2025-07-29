import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Todo = ({ todo, onToggle, onDelete }) => {
  const { id, title, completed } = todo;
  function handleChange() {
    onToggle(id, { title, completed: !completed });
  }

  function handleClick() {
    onDelete(id);
  }
  return (
    <div className={`${completed ? 'completed' : ''}`}>
      <input type='checkbox' onChange={handleChange} checked={completed} />
      <span>{title}</span>
      <button onClick={handleClick}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Todo;
