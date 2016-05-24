import express from 'express';

import { authSetup } from './server/authSetup';
import { webpackSetup } from './server/webpackSetup';
import { routingSetup } from './server/routingSetup';

let { app, passport } = authSetup(express());
app = webpackSetup(app);
app = routingSetup(app, passport);

const port = 8080;

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
