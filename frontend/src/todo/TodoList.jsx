import React from 'react';
import moment from 'moment';

import IconButton from '../template/IconButton';

export default props => {
  const renderRows = () => {
    const list = props.list || [];

    return props.list.map(todo => {
        return (
          <tr key={todo._id}>
            <td>{todo.description}</td>
            <td>{moment(todo.created_at).format('DD/MM/YYYY HH:mm:ss')}</td>
            <td>
              <IconButton style="danger" icon="trash-o"
                onClick={() => props.handleRemove(todo)} />
            </td>
          </tr>
        )
      });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Data de criação</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
};