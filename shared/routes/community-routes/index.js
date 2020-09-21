import { IndexRoute, Redirect, Route } from 'react-router';
import React, { PropTypes } from 'react';

import Community from '../../components/Community';
import CommunityCodeOfConduct from '../../components/CommunityCodeOfConduct';
import CommunityLayout from '../../components/CommunityLayout';
import ErrorPage404 from '../../components/ErrorPage404';

export default function routes(state) {
  const CommunityWithData = (props) => (
    <Community {...state} {...props.params} />
  );
  return (
    <Route path="/" component={CommunityLayout}>
      <IndexRoute component={CommunityWithData} />
      <Redirect path="community" to="/" />
      <Route path="/event/:eventId(\\d+)" component={CommunityWithData} />
      <Route path="/code-of-conduct" component={CommunityCodeOfConduct} />
      <Route path="*" component={ErrorPage404} />
    </Route>
  );
}

routes.propTypes = {
  params: PropTypes.shape({}),
};
