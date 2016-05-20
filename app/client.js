import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import routes from './routes';
import { configureStore } from './store';
import reducers from './reducers';
import App from './App';

const store = configureStore(browserHistory, window.__initialState__);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer store={store}>
    <App store={store} history={history} routes={routes} />
  </AppContainer>,
  document.getElementById('main')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer store={store}>
         <NextApp store={store} history={history} routes={routes} />
      </AppContainer>,
    document.getElementById('main')
    );
  });
}
