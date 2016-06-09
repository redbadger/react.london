import React, { Component } from 'react';

import Editor from '../../containers/Editor';
import Preview from '../../containers/Preview';

import Radium, { Style } from 'radium';

const App = () => (
  <div style={styles}>
    <Editor />
    <Preview />
  </div>
);

const styles = {
  width: '100%',
  display: 'flex',
};

export default Radium(App);
