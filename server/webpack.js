import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

const compiler = webpack(webpackConfig);
const middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  stats: 'errors-only',
  publicPath: webpackConfig.output.publicPath,
});

export default middleware;
