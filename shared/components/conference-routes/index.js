import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import Layout from '../Layout';
import Conference from '../Conference';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Conference} />
    <Redirect path="conference" to="/" />
  </Route>
);
