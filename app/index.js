import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from './store/';
import App from './components/App/App';
import Preview from './components/Preview/Preview';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Preview} />
      <Route path="editor" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('main')
);
