import express from 'express';
import morgan from 'morgan';

import { authSetup } from './auth';
import { webpackSetup } from './webpack';
import { routingSetup } from './routing';

const app = authSetup(express());

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('common'));
} else {
  app.use(morgan('dev'));
  webpackSetup(app);
}

routingSetup(app);

const port = process.env.PORT || 8080;

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s.', port);
  }
});
