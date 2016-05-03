import React from 'react';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import reducers from '../reducers';

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    routing: routerReducer,
    userTexts: reducers,
  });

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
  );

  return store;
}
