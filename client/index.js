import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from '../shared/routes/community-routes';
import reducer from '../shared/reducers';

const initialState = window.__INITIAL_STATE__;
const store = createStore(reducer, initialState);

const components = (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
);

ReactDOM.render(components, document.getElementById('main'));
