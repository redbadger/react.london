import request from 'supertest';
import app from '../app';
import { useDummyData } from '../../test/mock-data-source';

describe('GET /__health__', () => {
  it('returns 200, to be checked by load balancer', done => {
    request(app)
      .get('/__health__')
      .expect(200)
      .end(done);
  });
});

describe('GET /', () => {
  it('redirects', done => {
    request(app)
      .get('/')
      .expect(302)
      .expect('LOCATION', '/community')
      .end(done);
  });
});

describe('GET /conference', () => {
  it('/renders OK', done => {
    useDummyData();
    request(app)
      .get('/conference')
      .expect(200)
      .end(done);
  });
});

describe('GET /community', () => {
  it('/renders OK', done => {
    useDummyData();
    request(app)
      .get('/community')
      .expect(200)
      .end(done);
  });
});

// TODO: Sad path tests. And also sad path implementation.
