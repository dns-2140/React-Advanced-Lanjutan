import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodos,
  updateTodo,
  deleteTodo,
  addTodo,
} from '../redux/asyncReducer';
import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = (title) => {
    console.log(title);
    dispatch(addTodo(title));
  };

  if (error) return <p>{error.message}</p>;
  return (
    <div className='todoContainer'>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoContainer;
