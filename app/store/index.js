import 'babel-polyfill';

import React from 'react';

import { createStore, compose, applyMiddleware } from 'redux';
import { persistentStore } from 'redux-pouchdb-plus';
import { watchDeploy } from '../sagas';
import PouchDB from 'pouchdb';

import rootReducer from '../reducers';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const databaseName = 'reactlondon';
const localDatabase = new PouchDB(databaseName);
import DevTools from '../containers/DevTools';
const remoteDatabase = new PouchDB('http://localhost:5984/' + databaseName);

const enhancer = compose(
  // Syncs PouchDB (local) and Redux
  persistentStore({ db: localDatabase }),

  applyMiddleware(sagaMiddleware),

  // Required! Enable Redux DevTools with the monitors you chose
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
);

export const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancer);

  // Syncs PounchDB (local) and CouchDB (remote)
  localDatabase.sync(remoteDatabase, { live: true });

  sagaMiddleware.run(watchDeploy);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/* .default if you use Babel 6+ */)
    );
  }

  return store;
};
