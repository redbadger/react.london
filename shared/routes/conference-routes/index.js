import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import Layout from '../../components/Layout';
import Conference from '../../components/Conference';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Conference} />
    <Redirect path="conference" to="/" />
  </Route>
);
