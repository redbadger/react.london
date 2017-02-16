import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import communityRoutes from '../shared/routes/community-routes';
import conferenceRoutes from '../shared/routes/conference-routes';
import isMeetupRequest from '../shared/utilities/meetup-request';

import * as ReactGA from 'react-ga';
const domainList = ['react.london', 'ti.to'];
ReactGA.initialize('UA-16654919-5', { gaOptions: { allowLinker: 'true' } });
ReactGA.ga('require', 'linker');
ReactGA.ga('linker:autoLink', domainList);

const initialState = window.__INITIAL_STATE__;

let components;

const routerUpdate = () => {
  const { hash } = window.location;

  if (hash !== '') {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 100);
  }

  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

if (isMeetupRequest(window.location)) {
  components = (
    <Router
      history={browserHistory}
      onUpdate={routerUpdate}
    >
      {communityRoutes(initialState)}
    </Router>
  );
} else {
  components = (
    <Router
      history={browserHistory}
      render={applyRouterMiddleware(useScroll())}
      onUpdate={routerUpdate}
    >
      {conferenceRoutes(initialState)}
    </Router>
  );
}

ReactDOM.render(components, document.getElementById('main'));
