import React from 'react'

import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

export default props => {

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
          onChange={props.handleChange}
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