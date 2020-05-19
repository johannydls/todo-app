import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos';

export default props => {
  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm />
      <TodoList />
    </div>
  );
}

// export default class Todo extends Component {

//   constructor(props) {
//     super(props);
//     this.handleRemove = this.handleRemove.bind(this);
//   }

//   refresh(description = '') {
//     const search = description ? `&description__regex=/${description}/` : '';
//     axios.get(`${URL}?sort=-created_at${search}`).then(res => {
//       this.setState({ ...this.state, description, list: res.data });
//     });
//   }

//   handleRemove(todo) {
//     axios.delete(`${URL}/${todo._id}`).then(res => {
//       this.refresh(this.state.description);
//     });
//   }

//   render() {
//     return (
//       <div>
//         <PageHeader name="Tarefas" small="Cadastro" />
//         <TodoForm />
//         <TodoList handleRemove={this.handleRemove} />
//       </div>
//     );
//   }
// }
