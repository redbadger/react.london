import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import Layout from '../../components/Layout';
import Community from '../../components/Community';

export default function routes(state) {
  const CommunityWithData = () => <Community {...state} />;
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={CommunityWithData} />
      <Redirect path="community" to="/" />
    </Route>
  );
}
