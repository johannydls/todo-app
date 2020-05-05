import React from 'react';
import moment from 'moment';

import IconButton from '../template/IconButton';

export default props => {
  const renderRows = () => {
    const list = props.list || [];

    return props.list.map(todo => {
        return (
          <tr key={todo._id} className={todo.done ? 'trDone' : 'trPending'}>
            <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
            <td>{moment(todo.created_at).format('DD/MM/YYYY HH:mm:ss')}</td>
            <td className="updated">{moment(todo.updated_at).locale('pt-BR').startOf('minutes').fromNow()}</td>
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
          <th>Data de criação</th>
          <th>Última atualização</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
};