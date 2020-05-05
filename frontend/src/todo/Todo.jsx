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
    this.handleRemove = this.handleRemove.bind(this);

    this.refresh();
  }

  refresh() {
    axios.get(`${URL}?sort=-created_at`).then(res => {
      this.setState({ ...this.state, description: '', list: res.data });
    });
  }

  handleAdd() {
    const description = this.state.description;
    
    axios.post(URL, { description })
    .then(res => {
      this.refresh();
    })
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then(res => {
      this.refresh();
    });
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm description={this.state.description} 
                handleAdd={this.handleAdd}
                handleChange={this.handleChange} />
        <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}

