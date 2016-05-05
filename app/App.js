import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

const app = ({ store, history, routes }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

export default app;
