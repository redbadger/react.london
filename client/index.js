import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import communityRoutes from '../shared/routes/community-routes';
import conferenceRoutes from '../shared/routes/conference-routes';
import reducer from '../shared/reducers';
import isMeetupRequest from '../shared/utilities/meetup-request';

const initialState = window.__INITIAL_STATE__;
const store = createStore(reducer, initialState);

let components;

if (isMeetupRequest(window.location)) {
  components = (
    <Provider store={store}>
      <Router history={browserHistory}>
        {communityRoutes}
      </Router>
    </Provider>
  );
} else {
  components = (
    <Router history={browserHistory}>
      {conferenceRoutes}
    </Router>
  );
}

ReactDOM.render(components, document.getElementById('main'));
