import { createStore, combineReducers, applyMiddleware } from 'redux';

// Middlewares
// Serve para processar promises resolvidas para disparar o reducer
import promiseMiddleware from 'redux-promise';
// Serve para chamar um array com várias actions (de forma paralela)
import multiMiddleware from 'redux-multi';
// 
import thunkMiddleware from 'redux-thunk';

import todoReducer from './reducers/todos';

// Para usar o plugin do Redux no Chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducers = combineReducers({
  todo: todoReducer
});

function storeConfig() {
  return applyMiddleware(
    promiseMiddleware,
    multiMiddleware,
    thunkMiddleware
  )(createStore)(reducers, devTools);
}

export default storeConfig;