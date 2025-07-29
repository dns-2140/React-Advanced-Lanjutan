import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodos,
  updateTodo,
  deleteTodo,
  addTodo,
} from './redux/asyncReducer';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
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

  const handleToggle = (id, updates) => {
    dispatch(updateTodo(id, updates));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  if (error) return <p>{error.message}</p>;
  return (
    <>
      <TodoForm onAdd={handleAddTodo} />
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
}

export default App;
