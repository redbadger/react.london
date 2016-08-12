import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import Layout from '../Layout';
import Community from '../../containers/Community';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Community} />
    <Redirect path="community" to="/" />
  </Route>
);
