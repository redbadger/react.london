import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from '../Layout';
import Community from '../Community';
import Conference from '../Conference';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Community} />
    <Route path="community" component={Community} />
    <Route path="conference" component={Conference} />
  </Route>
);
