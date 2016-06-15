import express from 'express';
import morgan from 'morgan';

import { authSetup } from './authSetup';
import { webpackSetup } from './webpackSetup';
import { routingSetup } from './routingSetup';

let app = authSetup(express());
app.use(morgan('dev'));
app = webpackSetup(app);
app = routingSetup(app);

const port = process.env.PORT || 8080;

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s.', port);
  }
});
