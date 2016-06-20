/* eslint-disable global-require */
import 'babel-polyfill';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';


// Dev tools

let devtoolsMiddleware;
if (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') {
  devtoolsMiddleware = window.devToolsExtension();
} else {
  devtoolsMiddleware = f => f;
}


// Sagas

import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import saga from '../sagas';


// Store

const middleware = compose(
  devtoolsMiddleware,
  applyMiddleware(sagaMiddleware)
);

export const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, middleware);
  sagaMiddleware.run(saga);
  return store;
};
