import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import routes from '../../../shared/routes/community-routes';
import reducer from '../../../shared/reducers';
import { getSiteState } from '../../data';
import { CONFERENCE_URL } from '../../constants';
import { useRoutes } from '../../routes';

function sendSite(res, renderProps) {
  getSiteState().then(state => {
    const store = createStore(reducer, state);
    const initialState = store.getState();
    const content = renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );
    res.render('index', { content, initialState });
  })
  .catch((err) => {
    // TODO Replace this with a user friendly error page
    res.status(500).json({ error: err.message });
  });
}

function router(req, res) {
  if (req.path === '/conference') {
    res.redirect(CONFERENCE_URL);
  } else {
    const location = req.url;
    useRoutes(res, routes, location, sendSite);
  }
}

export default router;
