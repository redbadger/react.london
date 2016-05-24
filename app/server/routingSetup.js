import path from 'path';
import bodyParser from 'body-parser';

import { ensureAuthenticated } from './authSetup';
import serverConfig from '../serverConfig';
import { createSite } from './staticSite';

export const routingSetup = (app, passport) => {
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
    res.sendFile(path.join(__dirname, '../', 'index.html'));
  });

  app.post('/staging/', (req, res) => {
    createSite(req.body, req.headers, serverConfig.buckets.staging);
    res.sendStatus(200);
  });

  app.post('/live/', (req, res) => {
    createSite(req.body, req.headers, serverConfig.buckets.live);
    res.sendStatus(200);
  });
  return app;
};
