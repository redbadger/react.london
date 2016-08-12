import express from 'express';
import morgan from 'morgan';
import securityMiddleware from 'helmet';
import communityRouter from './community-router';
import conferenceRouter from './conference-router';
import enforceHTTPS from './enforce-https';
import { setDataSource } from './data';
import * as badgerBrain from './data/badger-brain';

function isMeetupRequest(req) {
  return req.hostname.indexOf('meetup') === 0;
}

const app = express();

app.set('view engine', 'pug');
app.set('views', './server/views');
app.set('trust proxy');
setDataSource(badgerBrain);

app.use(securityMiddleware());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
  app.use(express.static('dist'));
  app.use(express.static('assets'));
}

// Health check runs over HTTP, must go before HTTPS middleware
app.get('/__health__', (req, res) => res.status(200).send('ok'));

if (process.env.NODE_ENV === 'production') {
  app.use(enforceHTTPS());
}

app.use((req, res) => {
  if (isMeetupRequest(req)) {
    communityRouter(req, res);
  } else {
    conferenceRouter(req, res);
  }
});

export default app;
