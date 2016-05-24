import 'babel-polyfill';

import React from 'react';

import { createStore, compose, applyMiddleware } from 'redux';
import DevTools from '../containers/DevTools';
import createSagaMiddleware from 'redux-saga';

import { syncDatabase } from '../api'
import { getContent, watchSaveContent } from '../sagas';

import rootReducer from '../reducers';

import PouchDB from 'pouchdb';
export const localDb = new PouchDB('reactlondon');
export const remoteDb = new PouchDB('http://localhost:5984/reactlondon')
window.PouchDB = PouchDB

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(

  // Middleware you want to use in development:
  applyMiddleware(sagaMiddleware),

  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(getContent);
  sagaMiddleware.run(watchSaveContent);
  syncDatabase(remoteDb);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
     store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
