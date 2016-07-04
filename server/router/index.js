import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import routes from '../../client/components/routes';
import reducer from '../../client/reducers';

function sendSite(res, renderProps) {
  const defaultState = {}; // TODO
  const store = createStore(reducer, defaultState);
  const content = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );
  res.render('index', { content });
}

function router(req, res) {
  const location = req.url;
  match({ routes, location }, (error, _, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    if (renderProps) {
      return sendSite(res, renderProps);
    }
    res.status(404).send('Not found');
  });
}

export default router;
