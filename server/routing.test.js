import express from 'express';
import request from 'supertest';
import passport from 'passport';

import { routingSetup } from './routingSetup';

function setup(authenticated = true) {
  const app = express();
  app.use(passport.initialize());
  app.use(passport.session());
  app.use((req, res, next) => {
    req.isAuthenticated = () => authenticated; // eslint-disable-line no-param-reassign
    req.user = {}; // eslint-disable-line no-param-reassign
    next();
  });
  return routingSetup(app);
}

describe('GET /', () => {
  it('302s and redirect user to login when not authenticated', done => {
    const app = setup(false);
    request(app)
      .get('/')
      .expect(302)
      .expect('Location', '/login')
      .end(done);
  });

  it('200s when authenticated', done => {
    const app = setup();
    request(app)
      .get('/')
      .expect(200)
      .expect('Location', '/')
      .end(done);
  });
});

describe('POST /live/', () => {
  it('302s and redirect user to login when not authenticated', done => {
    const app = setup(false);
    request(app)
      .post('/live/')
      .expect(302)
      .expect('Location', '/login')
      .end(done);
  });

  it.skip('generates the site and 202s when authenticated', done => {
    // TODO
    // mock out the call to AWS somehow.
    const app = setup();
    request(app)
      .post('/live/')
      .expect(202)
      // Assert that mock has been called.
      .end(done);
  });
});
