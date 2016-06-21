import express from 'express';
import morgan from 'morgan';

import { authSetup } from './auth';
import { webpackSetup } from './webpack';
import { routingSetup } from './routing';

let app = authSetup(express());
app.use(morgan('dev'));
app.use(express.static('dist'));
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
