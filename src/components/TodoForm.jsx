import { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Auto-hide after 3s
      return;
    }

    onAdd(title);
    setTitle('');
  };

  const handleChange = (e) => {
    if (showAlert) setShowAlert(false); // Hide alert when typing
    setTitle(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className='todoForm'>
      <div className='input-wrapper'>
        <input
          type='text'
          value={title}
          onChange={handleChange}
          placeholder='Tambah tugas baru'
          aria-invalid={showAlert}
          aria-describedby='empty-alert'
          className={showAlert ? 'error' : ''}
        />

        {showAlert && (
          <div id='empty-alert' className='alert' role='alert'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>Task cannot be empty</span>
          </div>
        )}
      </div>
      <button type='submit'>
        <span>Tambah</span>
        <img src='./plus.svg' alt='' />
      </button>
    </form>
  );
};

export default TodoForm;
