import axios from "axios";

const initialState = {
  todos: [],
  error: null,
};

const API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

//Thunk action
export const addTodo = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_BASE_URL, {
        title,
        completed: false,
      });
      const data = response?.data;
      dispatch({ type: "ADD_TODO_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "ADD_TODO_FAILURE", payload: error.message });
    }
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios(API_BASE_URL);
      const { data } = response;
      dispatch({ type: "FETCH_TODOS_SUCCESS", payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "FETCH_TODOS_FAILURE", payload: error.message });
    }
  };
};

//update
export const updateTodo = (id, updates) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, updates);
      dispatch({ type: "UPDATE_TODO_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "UPDATE_TODO_FAILURE", payload: error.message });
    }
  };
};

//delete
export const deleteTodo = (id) => async (dispatch) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  dispatch({ type: "DELETE_TODO_SUCCESS", payload: id });
};

//reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO_SUCCESS":
      return {
        ...state,
        error: null,
        todos: [...state.todos, action.payload],
      };
    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        todos: action.payload,
        error: null,
      };
    case "UPDATE_TODO_SUCCESS":
      return {
        ...state,
        error: null,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    case "DELETE_TODO_SUCCESS":
      return {
        ...state,
        error: null,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "FETCH_TODOS_FAILURE":
    case "UPDATE_TODO_FAILURE":
    case "DELETE_TODO_FAILURE":
    case "ADD_TODO_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default asyncReducer;
