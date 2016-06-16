import path from 'path';
import bodyParser from 'body-parser';
import { compilePreview } from './static-site';
import { publishSite } from './publish';

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};

export const routingSetup = (app) => {
  app.use(bodyParser.json());
  app.use(ensureAuthenticated);

  app.get('*.js', (req, res) => {
    res.sendStatus(404);
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../app', 'index.html'));
  });

  app.post('/publish/', (req, res) => {
    const page = compilePreview(req.body);
    const pages = [page];
    publishSite(pages)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(503));
  });
  return app;
};
