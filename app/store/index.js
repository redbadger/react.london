import React from 'react';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import reducers from '../reducers';

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    routing: routerReducer,
    initialValues: reducers,
    form: formReducer,
  });

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      ),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
    )
  );

  return store;
}
