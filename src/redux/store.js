import { applyMiddleware, createStore } from 'redux';
import asyncReducer from './asyncReducer';
import { thunk } from 'redux-thunk';

const store = createStore(asyncReducer, applyMiddleware(thunk));

export default store;
