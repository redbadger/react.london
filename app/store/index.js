import 'babel-polyfill';

import React from 'react';

import { createStore, compose, applyMiddleware } from 'redux';
import { persistentStore } from 'redux-pouchdb-plus';
import PouchDB from 'pouchdb';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const databaseName = 'reactlondon';
const localDatabase = new PouchDB(databaseName);

const enhancer = compose(
  // Syncs PouchDB (local) and Redux
  persistentStore({ db: localDatabase }),

  // Required! Enable Redux DevTools with the monitors you chose
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
);

export const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/* .default if you use Babel 6+ */)
    );
  }

  return store;
};
