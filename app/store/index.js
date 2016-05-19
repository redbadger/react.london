import 'babel-polyfill';

import React from 'react';

import { createStore, compose, applyMiddleware } from 'redux';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import rootReducer from '../reducers';

import DevTools from '../containers/DevTools';

const enhancer = compose(

  // Middleware you want to use in development:
  applyMiddleware(),

  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
     store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
