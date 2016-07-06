import express from 'express';
import morgan from 'morgan';
import router from './router';

const app = express();

app.set('view engine', 'pug');
app.set('views', './server/views');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
  app.use(express.static('dist'));
  app.use(express.static('assets'));
}

app.get('/__health__', (req, res) => {
  res.status(200).send('ok');
});

app.use(router);

export default app;
