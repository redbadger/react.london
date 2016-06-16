import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './store/';

import EditorHome from './components/EditorHome';
import EditorLayout from './components/EditorLayout';
import EditorNotFound from './components/EditorNotFound';
import EventEditor from './components/EventEditor';
import CommunityEditor from './components/CommunityEditor';
import ConferenceEditor from './components/ConferenceEditor';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={EditorLayout} >
        <IndexRoute component={EditorHome} />
        <Route path="/" component={EditorHome} />
        <Route path="community" component={CommunityEditor} />
        <Route path="conference" component={ConferenceEditor} />
        <Route path="event/:eventID" component={EventEditor} />
        <Route path="*" component={EditorNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
