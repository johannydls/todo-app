import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      description: '',
      list: []
    }
    
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);

    axios.get(URL).then(res => {
      this.setState({ ...this.state, list: res.data });
    });
  }

  handleAdd() {
    const description = this.state.description;
    
    axios.post(URL, { description })
    .then(res => {
      const list = [...this.state.list, res.data];
      this.setState({ ...this.state, list: list});
    })
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm description={this.state.description} 
                handleAdd={this.handleAdd}
                handleChange={this.handleChange} />
        <TodoList list={this.state.list}/>
      </div>
    );
  }
}

