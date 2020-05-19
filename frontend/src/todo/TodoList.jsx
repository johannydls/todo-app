import React from 'react';
import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  changeStatus,
  removeTodo
} from '../store/actions/todos.js';

import IconButton from '../template/IconButton';

function TodoList(props) {

  const renderRows = () => {
    const list = props.list || [];
    const searchedItem = props.searchedItem;
    return list.map(todo => {
        return (
          <tr key={todo._id} className={todo.done ? 'trDone' : 'trPending'}>
            <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
            <td>{moment(todo.created_at).format('DD/MM/YYYY HH:mm:ss')}</td>
            <td className="tableUpdated">{moment(todo.updated_at).locale('pt-BR').startOf('minutes').fromNow()}</td>
            <td>
              <IconButton style="success" icon="check" hide={todo.done}
                onClick={() => props.changeStatus(todo, searchedItem)} />
              <IconButton style="warning" icon="undo" hide={!todo.done}
                onClick={() => props.changeStatus(todo, searchedItem)} />
              <IconButton style="danger" icon="trash-o" hide={!todo.done}
                onClick={() => props.removeTodo(todo)} />
            </td>
          </tr>
        )
      });
  };

  if (props.list && props.list.length > 0) {
    return (
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th>Descrição</th>
            <th className="tableCreated">Data de criação</th>
            <th>Última atualização</th>
            <th className='tableActions'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    );
  } else {
    if (props.isSearch) {
      return (
        <div className="todoList--empty">
          <h3>Nem item retornado na busca!</h3>
        </div>
      )
    } else {
      return (
        <div className="todoList--empty">
          <h3>Você não tem tarefas!</h3>
        </div>
      )
    }
  }
};

function mapStateToProps(state) {
  return {
    list: state.todo.list,
    searchedItem: state.todo.description,
    isSearch: state.todo.search
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeStatus,
    removeTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);