import path from 'path';
import bodyParser from 'body-parser';

import { createSite } from './staticSite';

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};

export const routingSetup = (app) => {
  app.use(bodyParser.json());

  app.get('/', ensureAuthenticated, (req, res) => {
    res.location('/');
    res.sendFile(path.join(__dirname, '../app', 'index.html'));
  });

  app.post('/staging/', (req, res) => {
    createSite(req.body, req.headers, process.env.BUCKET_STAGING);
    res.sendStatus(200);
  });

  app.post('/live/', (req, res) => {
    createSite(req.body, req.headers, process.env.BUCKET_LIVE);
    res.sendStatus(200);
  });
  return app;
};
