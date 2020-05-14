import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';

import App from './main/App';

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));

