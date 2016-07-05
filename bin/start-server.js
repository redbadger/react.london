import app from '../server/app';
import logger from '../server/logger';

const port = process.env.PORT || 8080;
app.listen(port, error => {
  if (error) {
    logger.error(error);
  } else {
    logger.info(`==> 🌎  Listening on port ${port}.`);
  }
});
