/* eslint-disable global-require */
import 'babel-polyfill';

import { createStore, compose } from 'redux';

import rootReducer from '../reducers';


const enhancer = compose(
  // Enable Redux DevTools with the monitors you chose
  (
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ) ? window.devToolsExtension() : f => f
);

export const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
};
