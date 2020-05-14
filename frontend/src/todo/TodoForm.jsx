import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeDescription } from '../store/actions/todos';

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

function TodoForm(props) {

  const keyHandler = (e) => {
    if (e.key ===   'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === 'Escape') {
      props.handleClear();
    }
  }

  return (
    <div role="form" className="todoForm row">
      <Grid cols="12 9 10">
        <input id="description" className="form-control" type="text"
          placeholder="Adicione uma tarefa" 
          value={props.description}
          onChange={props.changeDescription}
          onKeyUp={keyHandler} />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton 
            style="primary" 
            icon="plus" 
            onClick={props.handleAdd} />
        <IconButton 
            style="info" 
            icon="search"
            hide={props.search} 
            onClick={props.handleSearch} />
        <IconButton 
            style="default" 
            icon="close"
            hide={!props.search} 
            onClick={props.handleClear} />
      </Grid>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    description: state.todo.description
  }
}

// No onChange, usa-se diretamente o 
// changeDescription, e na action, muda o payload 
// para event.target.value
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeDescription }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);