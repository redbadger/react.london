import express from 'express';

import { authSetup } from './server/authSetup';
import { webpackSetup } from './server/webpackSetup';
import { routingSetup } from './server/routingSetup';

let app = authSetup(express());
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
