import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';

import Editor from './containers/Editor';
import Preview from './containers/Preview';
import DevTools from './containers/DevTools';

import Radium, { Style } from 'radium';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div style={styles}>
      <Editor />
      <Preview />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('main')
);

module.hot.accept();

const styles = {
  width: '100%',
  display: 'flex',
};
