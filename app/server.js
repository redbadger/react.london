import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

import bodyParser from 'body-parser';
import config from '../webpack.config';
import serverConfig from './serverConfig';

import { authSetup, ensureAuthenticated } from './server/auth';
import { createSite } from './server/staticSite';

const { app, passport } = authSetup(express());

const port = 8080;

let compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

app.get('/login', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

app.get(
  '/login/callback',
  passport.authenticate(
    'google',
    { failureRedirect: 'http://www.red-badger.com' }
  ),
  (req, res) => res.redirect('/')
);

app.get('/', ensureAuthenticated, (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/staging/', (req, res) => {
  createSite(req.body, req.headers, serverConfig.buckets.staging);
  res.sendStatus(200);
});

app.post('/live/', (req, res) => {
  createSite(req.body, req.headers, serverConfig.buckets.live);
  res.sendStatus(200);
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
