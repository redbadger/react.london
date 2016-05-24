import express from 'express';
import request from 'supertest';
import passport from 'passport';

import { routingSetup } from './routingSetup';

describe('GET /', () => {
  it('should return 302 when redirecting user to login', done => {
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

  it('should return 200 when user is logged in', done => {
    let app = express();
    app.use(passport.initialize());
    app.use(passport.session());
    app.use((req, res, next) => {
      req.isAuthenticated = () => true;
      req.user = {};
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
