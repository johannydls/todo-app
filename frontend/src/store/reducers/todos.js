
const initialState = {
  description: 'Ler livro',
  list: [
    { _id: 1, description: 'Pagar fatura do cartão', done: true },
    { _id: 2, description: 'Reunião com a equipe às 10:00', done: false },
    { _id: 3, description: 'Consulta médica na terça após o almoço', done: false }
  ]
}

export default function(state = initialState, action) {
  console.log(state, action);
  return state;
};