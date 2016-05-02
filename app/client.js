import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './reducers';

import App from './components/App/App.js';

const store = createStore(
  combineReducers({
    userTexts: reducers,
    routing: routerReducer,
  })
);

const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} />
    </Router>
  </Provider>,
  document.getElementById('main')
);
