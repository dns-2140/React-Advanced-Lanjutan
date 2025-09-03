import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  updateTodo,
  deleteTodo,
  addTodo,
} from "../redux/asyncReducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import TodoCounter from "./TodoCounter";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = (title) => {
    dispatch(addTodo(title));
  };
  const finishedCount = todos.filter((todo) => todo.completed).length;
  const unFinishedCount = todos.filter((todo) => !todo.completed).length;
  const totalCount = todos[todos.length - 1]?.id;
  if (error) return <p>{error.message}</p>;
  return (
    <div className="todoContainer">
      <TodoForm onAdd={handleAddTodo} />
      <TodoCounter
        finishedCount={finishedCount}
        unFinishedCount={unFinishedCount}
        totalCount={totalCount}
      />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoContainer;
