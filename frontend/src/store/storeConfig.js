import { createStore, combineReducers } from 'redux';

import todoReducer from './reducers/todos';

const reducers = combineReducers({
  todo: todoReducer
});

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig;