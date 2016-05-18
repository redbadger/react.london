const express  = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');
const React = require('react');
const ReactDOM = require('react-dom/server');
const bodyParser = require('body-parser');
const minifier = require('html-minifier');
const AWS = require('aws-sdk');

const Preview = require('./components/Preview/Preview');

const app = express();

let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

function generateStaticSite(properties, headers) {
  const markup = ReactDOM.renderToStaticMarkup();

  markup = `<!doctype html>
  <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      ${markup}
    </body>
  </html>`;

  const site = (minifer.minify(markup, {
    removeAttributeQuotes: true,
    minifyCSS: true,
    collapseWhitespace: true,
  }));

  return site;
};

function shipToAws(bucketName, site) {
  AWS.config.update({
    region: 'eu-west-1',
  });

  let s3 = new AWS.S3();

  s3.putObject({
    Bucket: bucketName,
    Key: 'index.html',
    ACL: 'public-read',
    Body: site,
    ContentType: 'text/html',
  }, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
};

app.post('/staging/', (req, res) => {
  const site = generateStaticSite(req.body, req.headers);
  shipToAws('london.react.dev', site);
  res.send(site);
});

app.post('/live/', (req, res) => {
  const site = generateStaticSite(req.body, req.headers);
  shipToAws('london.react.live', site);
  res.send(site);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
