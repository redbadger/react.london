import express from 'express';
import request from 'supertest';
import passport from 'passport';

import { routingSetup } from '.';
import {
  useFailingMockStore, useMockStore, getMockStoreValue,
} from '../storage/mock';

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

describe('GET routes', () => {
  it('/ 302s and redirect user to login when not authenticated', done => {
    const app = setup(false);
    request(app)
      .get('/')
      .expect(302)
      .expect('Location', '/login')
      .end((err) => {
        if (err) throw err;
        done();
      });
  });

  it('/ 200s when authenticated', done => {
    const app = setup();
    request(app)
      .get('/')
      .expect(200)
      .end((err) => {
        if (err) throw err;
        done();
      });
  });

  it('/whatever/route 200s when authenticated', done => {
    const app = setup();
    request(app)
      .get('/whatever/route')
      .expect(200)
      .end((err) => {
        if (err) throw err;
        done();
      });
  });


  it('404s for unknown Javascript', done => {
    const app = setup();
    request(app)
      .get('/angular.js')
      .expect(404)
      .end((err) => {
        if (err) throw err;
        done();
      });
  });
});


describe('POST /publish/', () => {
  it('302s and redirect user to login when not authenticated', done => {
    useMockStore();
    const app = setup(false);
    request(app)
      .post('/publish/', { events: {} })
      .expect(302)
      .expect('Location', '/login')
      .end((err) => {
        if (err) throw err;
        done();
      });
  });

  it('generates the site and 201s when authenticated', done => {
    useMockStore();
    const app = setup();
    request(app)
      .post('/publish/', {})
      .expect(201)
      .end((err) => {
        if (err) throw err;
        const body = getMockStoreValue('index.html');
        expect(body).to.match(/meetup/);
        done();
      });
  });

  it('500s when unable to upload to S3', done => {
    useFailingMockStore();
    const app = setup();
    request(app)
      .post('/publish/', {})
      .expect(503)
      .end((err) => {
        if (err) throw err;
        done();
      });
  });
});
