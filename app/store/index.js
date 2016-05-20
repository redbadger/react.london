import 'babel-polyfill';

import React from 'react';

import { createStore, compose, applyMiddleware } from 'redux';
import DevTools from '../containers/DevTools';
import createSagaMiddleware from 'redux-saga';
import { fetchContentRequested, putContentRequested } from '../sagas';

import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(

  // Middleware you want to use in development:
  applyMiddleware(sagaMiddleware),

  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

// This MUST run after mounting the middleware
// TODO: Unhack.


export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(fetchContentRequested);
  sagaMiddleware.run(putContentRequested);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
     store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
