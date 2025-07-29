import React from 'react';

const TodoCounter = ({ finishedCount, unFinishedCount }) => {
  return (
    <div className='todoCounter'>
      <span className='unfinished'>
        Belum selesai <span>{unFinishedCount} </span>
      </span>
      <span className='finished'>
        Selesai <span>{finishedCount} de 200 </span>{' '}
      </span>
    </div>
  );
};

export default TodoCounter;
