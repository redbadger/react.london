import 'babel-polyfill';

import React from 'react';

import { createStore, compose, applyMiddleware } from 'redux';
import { persistentStore } from 'redux-pouchdb-plus';
import { syncDatabase } from '../api'

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

import PouchDB from 'pouchdb';
export const localDb = new PouchDB('reactlondon');
export const remoteDb = new PouchDB('http://localhost:5984/reactlondon')

// Note: attaching PouchDB to the window is required for the chrome extension for debugging
// window.PouchDB = PouchDB

const enhancer = compose(
  // Handles syncing PouchDB (local) and Redux
  persistentStore({db: localDb}),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Handles syncing PounchDB (local) and CouchDB (remote)
  syncDatabase(remoteDb);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
     store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
