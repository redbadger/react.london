import express from 'express';
import raven from 'raven';
import morgan from 'morgan';
import securityMiddleware from 'helmet';
import communityRouter from './routers/community';
import conferenceRouter from './routers/conference';
import enforceHTTPS from './enforce-https';
import { setDataSource } from './data';
import * as badgerBrain from './data/badger-brain';
import isMeetupRequest from '../shared/utilities/meetup-request';
import { getEnvVar } from './env';
import robotsTxt from './robots';
import versionTxt from './version';

const app = express();

app.set('view engine', 'pug');
app.set('views', './server/views');
app.set('trust proxy');
setDataSource(badgerBrain);

// Health check runs over HTTP, must go before HTTPS middleware
app.get('/__health__', (req, res) => res.status(200).send('ok'));

if (process.env.NODE_ENV === 'production') {
  // Raven request handler must be first item
  const sentryURI = getEnvVar('RAVEN_SENTRY_URI');
  app.use(raven.middleware.express.requestHandler(sentryURI));

  app.use(enforceHTTPS());
}

app.use(securityMiddleware());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
  app.use(express.static('dist'));
  app.use(express.static('assets'));
}

app.get('/robots.txt', robotsTxt);
app.get('/version.txt', versionTxt);

app.use((req, res) => {
  if (isMeetupRequest(req)) {
    communityRouter(req, res);
  } else {
    conferenceRouter(req, res);
  }
});

if (process.env.NODE_ENV === 'production') {
  // Raven error handler must be first error handler
  const sentryURI = getEnvVar('RAVEN_SENTRY_URI');
  app.use(raven.middleware.express.errorHandler(sentryURI));
}

export default app;
