import axios from 'axios';

import {  
  DESCRIPTION_CHANGED,
  TODO_SEARCHED,
  TODO_SEARCH_CHANGED,
  TODO_CLEAR
} from './actionTypes';

const URL = 'http://localhost:3003/api/todos';

// Action creators
export function changeDescription(event) {
  return {
    type: DESCRIPTION_CHANGED,
    payload: event.target.value
  }
}

export function searchTodo() {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = description ? `&description__regex=/${description}/` : '';
    axios.get(`${URL}?sort=-created_at${search}`)
      .then(res => dispatch({ type: TODO_SEARCHED, payload: res.data }));
  }
}

export function searchTodoView(value) {
  return {
    type: TODO_SEARCH_CHANGED,
    payload: value
  }
}

export function addTodo2(description) {
  const request = axios.post(URL, { description });
  return [
    { type: TODO_ADDED, payload: request },
    searchTodo()
  ];
}

export function addTodo(description) {
  return dispatch => {
    axios.post(URL, { description })
      .then(_res => dispatch(clear()))
      .then(_res => dispatch(searchTodo()))
  }
}

export function changeStatus(todo) {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { done: !todo.done })
      .then(_res => dispatch(searchTodo()))
  }
}

export function removeTodo(todo) {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
      .then(_res => dispatch(searchTodo()))
  }
}

export function clear() {
  return [
    { type: TODO_CLEAR },
    searchTodo()
  ];
}