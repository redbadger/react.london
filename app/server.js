import 'ignore-styles';

import express from 'express';
import serialize from 'serialize-javascript';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from './store';
import routes from './routes';

import Preview from './components/Preview/Preview';

import  bodyParser from 'body-parser';
import { minify } from 'html-minifier';

import AWS from 'aws-sdk';

const app = express();

let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

const HTML = ({ content, store }) => (
  <html>
    <head>
    </head>
    <body>
      <div id="main" dangerouslySetInnerHTML={{ __html: content }} />
      <div id="devtools" />
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())}` }} />
      <script src='/build/bundle.js' />
    </body>
  </html>
);

app.post('/shipit/', (req, res) => {
  const markup = renderToStaticMarkup(<Preview
    radiumConfig={{ userAgent: req.headers['user-agent'] }}
    {...req.body}
  />);

  let intermediate = '<!doctype html>\n<html><body>' + markup + '</body></html>';

  const site = (minify(intermediate, {
    removeAttributeQuotes: true,
    minifyCSS: true,
    collapseWhitespace: true,
  }));

  AWS.config.update({
    region: 'eu-west-1',
  });

  let s3 = new AWS.S3();

  s3.putObject({
    Bucket: 'london.react.dev',
    Key: 'index.html',
    ACL: 'public-read',
    Body: site,
    ContentType: 'text/html',
  }, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });

  res.send(site);

});

app.use((req, res) => {
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
        <Provider
          radiumConfig={{ userAgent: req.headers['user-agent'] }}
          store={store}>
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
