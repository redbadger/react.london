import 'ignore-styles';

import express from 'express';
import serialize from 'serialize-javascript';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from './store';
import routes from './routes';

const app = express();

let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

const HTML = ({ content, store }) => (
  <html>
    <head>
      <link rel="stylesheet" href="/build/styles.css" />
    </head>
    <body>
      <div id="main" dangerouslySetInnerHTML={{ __html: content }} />
      <div id="devtools" />
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())}` }} />
      <script src='/build/bundle.js' />
    </body>
  </html>
);

app.use(function (req, res) {
  const memoryHistory = createMemoryHistory(req.url);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathnname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      res.send('<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>));
    }
  });
});

app.listen(8080, function () {
  console.log('Server listening on 8080, Ctrl+C to blow it all to hell.');
});
