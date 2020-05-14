import { CHANGE_DESCRIPTION } from '../actions/actionTypes';

const INITIAL_STATE = {
  description: 'Ler livro',
  list: [
    { _id: 1, description: 'Pagar fatura do cartão', done: true },
    { _id: 2, description: 'Reunião com a equipe às 10:00', done: false },
    { _id: 3, description: 'Consulta médica na terça após o almoço', done: false }
  ]
}

export default function(state = INITIAL_STATE, action) {
  console.log(state, action);

  switch(action.type) {
    case CHANGE_DESCRIPTION:
      return {
        ...state,
        description: action.payload
      }

    default:
      return state;
  }
};