import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import ConferenceLayout from '../../components/ConferenceLayout';
import Conference from '../../components/Conference';
import ConferencePartners from '../../components/ConferencePartners';

export default function routes(state) {
  const Partners = () => <ConferencePartners {...state} />;
  return (
    <Route path="/" component={ConferenceLayout}>
      <IndexRoute component={Conference} />
      <Route path="partners" component={Partners} />
      <Redirect path="conference" to="/" />
    </Route>
  );
}
