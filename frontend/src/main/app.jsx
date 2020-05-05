import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import '../template/Template.css';

import React from 'react';

import Menu from '../template/Menu';
import Routes from '../main/routes';

export default props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
);