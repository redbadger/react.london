import express from 'express';

import bodyParser from 'body-parser';
import serverConfig from './serverConfig';

import { authSetup, ensureAuthenticated } from './server/authSetup';
import { webpackSetup } from './server/webpackSetup';
import { createSite } from './server/staticSite';

let { app, passport } = authSetup(express());
app = webpackSetup(app);

const port = 8080;

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
