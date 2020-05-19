import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action creators
import { 
  changeDescription, 
  searchTodo,
  searchTodoView, 
  addTodo,
  clear
} from '../store/actions/todos';

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  keyHandler(e) {
    const { addTodo, searchTodo, description, searchTodoView } = this.props;
    if (e.key ===   'Enter') {
      if (e.shiftKey) {
        searchTodo();
        searchTodoView();
      } else {
        addTodo(description);
      }
    } else if (e.key === 'Escape') {
      this.handleClear();
    }
  }

  handleClear() {
    this.props.searchTodoView(false);
    this.props.clear();
    this.props.searchTodo();
  }

  // Método de ciclo de vida, executa sempre que o componente é exibido
  componentWillMount() {
    this.props.searchTodo();
  }

  render() {
    const { addTodo, searchTodo, description, search, searchTodoView } = this.props;

    return (
      <div role="form" className="todoForm row">
        <Grid cols="12 9 10">
          <input id="description" className="form-control" type="text"
            placeholder="Adicione uma tarefa" 
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler} />
        </Grid>
  
        <Grid cols="12 3 2">
          <IconButton 
              style="primary" 
              icon="plus" 
              onClick={() => addTodo(description)} />
          <IconButton 
              style="info" 
              icon="search"
              hide={search} 
              onClick={() => { searchTodo(); searchTodoView(true) }} />
          <IconButton 
              style="default" 
              icon="close"
              hide={!search} 
              onClick={() => this.handleClear()} />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    description: state.todo.description,
    search: state.todo.search
  }
}

// No onChange, usa-se diretamente o 
// changeDescription, e na action, muda o payload 
// para event.target.value
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    changeDescription, 
    searchTodo,
    searchTodoView,
    addTodo,
    clear
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);