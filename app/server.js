require('es6-promise').polyfill();

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
require('isomorphic-fetch');

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
      <meta charset="UTF-8" />
    </head>
    <body>
      <div id="main" dangerouslySetInnerHTML={{ __html: content }} />
      <div id="devtools" />
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())}` }} />
      <script src='/build/bundle.js' />
    </body>
  </html>
);

const generateStaticSite = ((properties, headers) => {
  let markup = renderToStaticMarkup(<Preview
    radiumConfig={{ userAgent: headers['user-agent'] }}
    text={ properties }
  />);

  markup = `<!doctype html>
  <html>
    <head>
      <meta charset="UTF-8" />
    </head>
    <body>
      ${markup}
    </body>
  </html>`;

  const site = (minify(markup, {
    removeAttributeQuotes: true,
    minifyCSS: true,
    collapseWhitespace: true,
  }));

  return site;
});

const shipToAws = ((bucketName, site) => {
  AWS.config.update({
    region: 'eu-west-1',
  });

  let s3 = new AWS.S3();

  s3.putObject({
    Bucket: bucketName,
    Key: 'index.html',
    ACL: 'public-read',
    Body: site,
    ContentType: 'text/html',
  }, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
});

app.post('/staging/', (req, res) => {
  const site = generateStaticSite(req.body, req.headers);
  shipToAws('london.react.dev', site);
  res.send(site);
});

app.post('/live/', (req, res) => {
  const site = generateStaticSite(req.body, req.headers);
  shipToAws('london.react.live', site);
  res.send(site);
});

function thing(url) {

}

app.get('/content/', (req, res) => {
  console.log('******************************');
  console.log('GET /content called!');
  console.log('******************************');
  fetch('http://127.0.0.1:5984/reactlondon/9db6c9bd6871df4fddcef7a3bb000d1a')
  .then(result => result.json())
  .then(json => res.send(json));
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
