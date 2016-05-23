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
// import { GoogleStrategy } from 'passport-google-oauth20';
var GoogleStrategy = require('passport-google-oauth20').Strategy;

import serverConfig from './config';

const app = express();

const port = 8080;

let compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

passport.serializeUser(function(user, cb) {
 cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
 cb(null, obj);
});

// set up your Google OAuth strategy elsewhere...
passport.use(new GoogleStrategy({
    clientID: "563722027137-rf5i5d96r2c0k1g7h8tjlqop4t7e7db7.apps.googleusercontent.com",
    clientSecret: "48xHdvwwDPCTa11jR7oxGrMM",
    callbackURL: "/connect/google/callback"
}, function(token, refreshToken, profile, done){
    if(profile._json.domain === "red-badger.com"){
        // find or create user in database, etc
        console.log(profile);
        return done(null, profile);

        // User.find({ id: profile.id }).done(done);
    }else{
        // fail
        done(new Error("Invalid host domain"));
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// first make sure you have access to the proper scope on your login route
app.get("/connect/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));

app.get('/connect/google/callback',
  passport.authenticate('google', { failureRedirect: '/connect/google' }),
  function(req, res) {
    console.log("redict");
    // Successful authentication, redirect home.
    res.redirect('/');
  });


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
