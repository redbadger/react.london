import React from 'react';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import {fetchContent} from '../actions';

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
  sagaMiddleware.run(fetchContent);
  return store;
}
