import express from 'express';
import morgan from 'morgan';

import { authSetup } from './auth';
import { webpackSetup } from './webpack';
import { routingSetup } from './routing';
import { useS3Store } from './storage/s3';
import { useDiskStore } from './storage/disk';
import logger from './logger';

const app = authSetup(express());

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('common'));
  app.use(express.static('dist'));
  useS3Store();
} else {
  app.use(morgan('dev'));
  webpackSetup(app);
  useDiskStore();
}

routingSetup(app);

const port = process.env.PORT || 8080;

app.listen(port, error => {
  if (error) {
    logger.error(error);
  } else {
    logger.info(`==> 🌎  Listening on port ${port}.`);
  }
});
