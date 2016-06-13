import React from 'react';
import radium from 'radium';
import Editor from '../../containers/Editor';
import Preview from '../../containers/Preview';

const styles = {
  width: '100%',
  display: 'flex',
};

const App = () => (
  <div style={styles}>
    <Editor />
    <Preview />
  </div>
);

export default radium(App);
