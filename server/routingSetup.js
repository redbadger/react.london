import path from 'path';
import bodyParser from 'body-parser';
import { compilePreview } from './static-site';
import { publishPage } from './publish';

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};

export const routingSetup = (app) => {
  app.use(bodyParser.json());
  app.use(ensureAuthenticated);

  app.get('/', (req, res) => {
    res.location('/');
    res.sendFile(path.join(__dirname, '../app', 'index.html'));
  });

  app.post('/staging/', (req, res) => {
    const html = compilePreview(req.body);
    publishPage(html, process.env.BUCKET_STAGING);
    res.sendStatus(202);
  });

  app.post('/live/', (req, res) => {
    const html = compilePreview(req.body);
    publishPage(html, process.env.BUCKET_LIVE);
    res.sendStatus(202);
  });
  return app;
};
