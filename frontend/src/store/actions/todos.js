import {  
  CHANGE_DESCRIPTION,
} from './actionTypes';

// Action creators
export function changeDescription(event) {
  return {
    type: CHANGE_DESCRIPTION,
    payload: event.target.value
  }
}
