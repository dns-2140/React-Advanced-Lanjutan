import React from 'react';
import Todo from './Todo';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/asyncReducer';
import { ImGift } from 'react-icons/im';

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  const handleToggle = (id, updates) => {
    dispatch(updateTodo(id, updates));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  if (!todos || todos.length === 0) {
    return (
      <div className='clipboard'>
        <img src='./clipboard.svg' alt='' />
        <span className='firstText'>Belum ada tugas untuk saat ini</span>
        <span className='secondText'>
          Silahkan tambah tugas baru pada form di atas
        </span>
      </div>
    );
  }
  return (
    <div className='todoList'>
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
