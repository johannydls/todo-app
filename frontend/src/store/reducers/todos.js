import { 
  DESCRIPTION_CHANGED,
  TODO_SEARCHED,
  TODO_SEARCH_CHANGED,
  TODO_CLEAR
} from '../actions/actionTypes';

const INITIAL_STATE = {
  description: '', 
  list: [],
  search: false
}

export default function(state = INITIAL_STATE, action) {
  console.log(state, action);

  switch(action.type) {
    case DESCRIPTION_CHANGED:
      return {
        ...state,
        description: action.payload
      }

    case TODO_SEARCHED:
      return {
        ...state,
        list: action.payload.data
      }

    case TODO_SEARCH_CHANGED:
      return {
        ...state,
        search: action.payload
      }
      
    case TODO_CLEAR:
      return {
        ...state,
        description: ''
      }

    default:
      return state;
  }
};