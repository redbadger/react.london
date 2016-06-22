import bodyParser from 'body-parser';

import * as site from './site';
import * as page from './page';

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};

export const routingSetup = (app) => {
  app.use(bodyParser.json());
  app.use(ensureAuthenticated);

  app.get('/site', site.show);
  app.post('/site', site.create);

  app.get('*.js', page.notFound);
  app.get('*', page.index);

  return app;
};
