import app from './app';
import logger from './logger';
import { readFileSync } from 'fs';

const port = process.env.PORT || 8080;
app.listen(port, error => {
  if (error) {
    logger.error(error);
  } else {
    const badger = readFileSync('./assets/badger.txt', 'utf-8');
    logger.info(badger);
    logger.info(`==> 🌎  Listening on port ${port}.`);
  }
});
