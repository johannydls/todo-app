import React from 'react';

export default props => (
  <div>
    <ul>
      {props.list.map(item => {
        return <li key={item._id}>{item.description}</li>
      })}
    </ul>
  </div>
);