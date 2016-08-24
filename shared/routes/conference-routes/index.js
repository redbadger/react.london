import React from 'react';
import { Route, Redirect } from 'react-router';

import ConferenceLayout from '../../components/ConferenceLayout';
import Conference from '../../components/Conference';
import ConferencePartners from '../../components/ConferencePartners';

export default function routes(state) {
  const Partners = () => <ConferencePartners {...state} />;
  return (
    <Route component={ConferenceLayout}>
      <Route path="/" component={Conference} />
      <Route path="/partners" component={Partners} />
      <Redirect path="/conference" to="/" />
    </Route>
  );
}
