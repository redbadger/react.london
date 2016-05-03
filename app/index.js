import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import style from './main.css';
import { configureStore } from './store';
import Preview from './containers/Preview.js';
import Editor from './containers/Editor.js';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div className="wrapper">
      <Editor />
      <Preview />
    </div>
  </Provider>,
  document.getElementById('main')
);
