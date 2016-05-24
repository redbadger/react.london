import path from 'path';
import bodyParser from 'body-parser';

import serverConfig from '../serverConfig';
import { createSite } from './staticSite';

export const routingSetup = (app, passport) => {
  app.use(bodyParser.json());

  app.get('/', ensureAuthenticated, (req, res) => {
    res.location('/');
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

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};
