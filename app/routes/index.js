import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import Editor from '../containers/Editor';
import Preview from '../containers/Preview';

import Radium, { Style } from 'radium';

const App = Radium(({ children }) => (
  <div style={styles}>
    <Editor />
    <Preview />
  </div>
));

const routes = (
  <Route path="/" component={App} />
);

const styles = {
  width: '100%',
  display: 'flex',
};

export default routes;
