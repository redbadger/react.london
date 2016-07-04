import express from 'express';
import morgan from 'morgan';
import createWebpackMiddleware from './webpack';
import router from './router';

const app = express();

app.set('view engine', 'pug');
app.set('views', './server/views');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('dev'));
  app.use(express.static('dist'));
  app.use(express.static('assets'));
}

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  app.use(createWebpackMiddleware());
  app.use(express.static('assets'));
}

app.use(router);

export default app;
