import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const mountApp = document.getElementById('main');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  mountApp
);

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <AppContainer component={require('./App').default} />,
      mountApp
    );
  });
}

module.hot.accept();
