import { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={handleChange}
        placeholder='Add a new todo..'
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default TodoForm;
