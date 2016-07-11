import app from './app';
import logger from './logger';

const port = process.env.PORT || 8080;
app.listen(port, error => {
  if (error) {
    logger.error(error);
  } else {
    logger.info(`==> 🌎  Listening on port ${port}.`);
  }
});
