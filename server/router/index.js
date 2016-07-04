import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import routes from '../../client/components/routes';
import reducer from '../../client/reducers';

function wrapHTML(html) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <title>React London</title>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css">
    <link rel="stylesheet" type="text/css" href="main.css">
  </head>
  <body>
    <main id="main">
      ${html}
    </main>
    <script src="/static/editor.js"></script>
  </body>
</html>
    `;
}

function sendSite(res, renderProps) {
  const defaultState = {}; // TODO
  const store = createStore(reducer);
  const page = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );
  const body = wrapHTML(page);
  res.status(200).send(body);
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
};

export default router;
