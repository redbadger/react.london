import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import CommunityLayout from '../../components/CommunityLayout';
import Community from '../../components/Community';
import ErrorPage404 from '../../components/ErrorPage404';

export default function routes(state) {
  const CommunityWithData = () => <Community {...state} />;
  return (
    <Route path="/" component={CommunityLayout}>
      <IndexRoute component={CommunityWithData} />
      <Redirect path="community" to="/" />
      <Route path="*" component={ErrorPage404} />
    </Route>
  );
}
