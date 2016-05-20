import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Editor from './containers/Editor';
import Preview from './containers/Preview';
import DevTools from './containers/DevTools';

import { configureStore } from './store';

import Radium, { Style } from 'radium';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={style}>
          <Editor />
          <Preview />
        </div>
      </Provider>
    );
  }
}

const style = {
  width: '100%',
  display: 'flex',
};

module.hot.accept();

export default Radium(App);
