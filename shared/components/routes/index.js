import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Layout from '../Layout';
import Community from '../../containers/Community';
import Conference from '../Conference';

export default (
  <Route path="/" component={Layout}>
    <IndexRedirect to="community" />
    <Route path="community" component={Community} />
    <Route path="conference" component={Conference} />
  </Route>
);
