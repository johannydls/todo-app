import React from 'react';
import moment from 'moment';

import { connect } from 'react-redux';

import IconButton from '../template/IconButton';

function TodoList(props) {

  const renderRows = () => {
    const list = props.list || [];

    return list.map(todo => {
        return (
          <tr key={todo._id} className={todo.done ? 'trDone' : 'trPending'}>
            <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
            <td>{moment(todo.created_at).format('DD/MM/YYYY HH:mm:ss')}</td>
            <td className="tableUpdated">{moment(todo.updated_at).locale('pt-BR').startOf('minutes').fromNow()}</td>
            <td>
              <IconButton style="success" icon="check" hide={todo.done}
                onClick={() => props.handleChangeStatus(todo)} />
              <IconButton style="warning" icon="undo" hide={!todo.done}
                onClick={() => props.handleChangeStatus(todo)} />
              <IconButton style="danger" icon="trash-o" hide={!todo.done}
                onClick={() => props.handleRemove(todo)} />
            </td>
          </tr>
        )
      });
  };

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
};

function mapStateToProps(state) {
  return {
    list: state.todo.list
  }
}

export default connect(mapStateToProps)(TodoList);