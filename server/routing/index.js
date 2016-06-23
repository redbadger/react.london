import path from 'path';
import bodyParser from 'body-parser';
import { compileSite } from '../static-site';
import { publishSite } from '../publish';
import * as storage from '../storage';

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};

export const routingSetup = (app) => {
  app.use(bodyParser.json());
  app.use(ensureAuthenticated);

  app.get('/site/', (req, res) => {
    storage.get('data/site.json')
      .then(data => res.set('Content-Type', 'Application/JSON').send(data))
      .catch(() => res.sendStatus(503));
  });

  app.post('/site/', (req, res) => {
    const site = compileSite(req.body);
    Promise.all([
      publishSite(site),
      storage.put('data/site.json', JSON.stringify(req.body)),
    ])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(503));
  });


  app.get('*.js', (req, res) => {
    res.sendStatus(404);
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../app', 'index.html'));
  });

  return app;
};
