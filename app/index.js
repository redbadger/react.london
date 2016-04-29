import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import style from './main.css';
import Preview from './containers/Preview.js';
import Editor from './containers/Editor.js';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Editor />
      <Preview />
    </div>
  </Provider>,
  document.getElementById('main')
);
