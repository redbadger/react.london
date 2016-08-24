import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import communityRoutes from '../shared/routes/community-routes';
import conferenceRoutes from '../shared/routes/conference-routes';
import isMeetupRequest from '../shared/utilities/meetup-request';

const initialState = window.__INITIAL_STATE__;

let components;

if (isMeetupRequest(window.location)) {
  components = (
    <Router history={browserHistory}>
      {communityRoutes(initialState)}
    </Router>
  );
} else {
  components = (
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      {conferenceRoutes(initialState)}
    </Router>
  );
}

ReactDOM.render(components, document.getElementById('main'));
