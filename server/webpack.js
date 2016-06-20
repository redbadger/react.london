import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

export const webpackSetup = app => {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    stats: 'errors-only',
    publicPath: webpackConfig.output.publicPath,
  }));
  return app;
};
