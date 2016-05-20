import React from 'react';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import { watchGetContent, watchSaveContent, watchSyncDb } from '../sagas';

import { callSyncDb, callGetContent } from '../actions';

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    routing: routerReducer,
    initialValues: reducers,
    form: formReducer,
  });

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
      ),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
    )
  );
  sagaMiddleware.run(watchGetContent);
  sagaMiddleware.run(watchSaveContent);
  sagaMiddleware.run(watchSyncDb);

  store.dispatch(callSyncDb('http://localhost:5984/reactlondon'));
  store.dispatch(callGetContent());

  return store;
}
