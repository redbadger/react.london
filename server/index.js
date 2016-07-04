import express from 'express';
import morgan from 'morgan';
import webpackMiddleware from './webpack';
import logger from './logger';
import router from './router';

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
} else {
  app.use(webpackMiddleware);
}

app.use(morgan('dev'));
app.use(express.static('assets'));
app.use(router);

const port = process.env.PORT || 8080;
app.listen(port, error => {
  if (error) {
    logger.error(error);
  } else {
    logger.info(`==> 🌎  Listening on port ${port}.`);
  }
});
