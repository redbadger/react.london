import React from 'react';
import  { Route, IndexRoute, Link } from 'react-router';

import Editor from '../containers/Editor';
import Preview from '../containers/Preview';

const App = ({ children }) => (
  <div className='wrapper'>
    <Editor />
    <Preview />
    {children}
  </div>
);

const routes = (
  <Route path="/" component={App} />
);

export default routes;
