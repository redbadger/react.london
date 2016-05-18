import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store';

import Editor from './containers/Editor';
import Preview from './containers/Preview';

import Radium, { Style } from 'radium';

const store = configureStore();

ReactDOM.render(
  <Provider>
    <div style={styles}>
      <Editor />
      <Preview />
    </div>
  </Provider>,
  document.getElementById('main')
);

const styles = {
  width: '100%',
  display: 'flex',
};
