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
    <form onSubmit={handleSubmit} className='todoForm'>
      <input
        type='text'
        value={title}
        onChange={handleChange}
        placeholder='Tambah tugas baru'
      />
      <button type='submit'>
        <span>Tambah</span>
        <img src='./plus.svg' alt='' />
      </button>
    </form>
  );
};

export default TodoForm;
