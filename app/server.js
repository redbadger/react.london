import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import bodyParser from 'body-parser';
import { minify } from 'html-minifier';
import AWS from 'aws-sdk';

import Preview from './components/Preview/Preview';
import config from '../webpack.config';

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import serverConfig from './config';

const app = express();

const port = 8080;

let compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

passport.use(
  new GoogleStrategy(
    { ...serverConfig.credentials, callbackURL: '/login/callback' },
    (token, refreshToken, profile, done) => {
      console.log(profile);
      if (serverConfig.allowedDomainNames.includes(profile._json.domain))
        return done(null, profile);
      else
        return done();
    }
  )
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/login', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

app.get(
  '/login/callback',
  passport.authenticate(
    'google',
    { failureRedirect: 'http://www.red-badger.com' }),
    (req, res) => {
      res.redirect('/');
    }
);

function generateStaticSite(properties, headers) {
  let markup = renderToStaticMarkup(<Preview
    radiumConfig={{ userAgent: headers['user-agent'] }}
    text={ properties }
  />);

  markup = `<!doctype html>
  <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      ${markup}
    </body>
  </html>`;

  const site = (minify(markup, {
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
