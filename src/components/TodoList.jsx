import React from 'react';
import Todo from './Todo';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/asyncReducer';

const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  const handleToggle = (id, updates) => {
    dispatch(updateTodo(id, updates));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
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
