import express from 'express';
import request from 'supertest';
import passport from 'passport';

import { routingSetup } from './routingSetup';

describe('GET /', () => {
  it('should return status 302 and redirect user to login when not authenticated', done => {
    let app = express();
    app.use(passport.initialize());
    app.use(passport.session());
    app = routingSetup(app);

    request(app)
      .get('/')
      .expect(302)
      .expect('Location', '/login')
      .end(done);
  });

  it('should return status 200 when authenticated', done => {
    let app = express();
    app.use(passport.initialize());
    app.use(passport.session());
    app.use((req, res, next) => {
      req.isAuthenticated = () => true; // eslint-disable-line no-param-reassign
      req.user = {}; // eslint-disable-line no-param-reassign
      next();
    });
    app = routingSetup(app);

    request(app)
      .get('/')
      .expect(200)
      .expect('Location', '/')
      .end(done);
  });
});
