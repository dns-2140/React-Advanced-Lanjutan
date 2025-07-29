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
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <input
        type='checkbox'
        onChange={handleChange}
        checked={completed}
        class='checkbox'
      />
      <label for='circleCheck'></label>
      <span className={`${completed ? 'completed' : ''}`}>{title}</span>
      <button onClick={handleClick} class='trash-icon'>
        <FaTrash />
      </button>
    </div>
  );
};

export default Todo;
