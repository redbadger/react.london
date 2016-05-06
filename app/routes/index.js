import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import Editor from '../containers/Editor';
import Preview from '../containers/Preview';

import Radium, { Style } from 'radium';

const App = Radium(({ children }) => (
  <div style={styles}>
    {appStyles}
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
}

const appStyles = (<Style rules={{
  'body, html': {
    width: '100%',
    margin: 0,
    fontFamily: 'sans-serif',
  },
}} />);

export default routes;
