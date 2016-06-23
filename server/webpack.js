import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import logger from './logger';

export function webpackSetup(app) {
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    stats: 'errors-only',
    publicPath: webpackConfig.output.publicPath,
  });
  logger.info('Using webpack dev middleware.');
  app.use(middleware);
  return app;
}
