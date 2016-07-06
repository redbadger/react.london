import request from 'supertest';
import app from '../app';

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
    request(app)
      .get('/conference')
      .expect(200)
      .end(done);
  });
});

describe('GET /community', () => {
  it('/renders OK', done => {
    request(app)
      .get('/community')
      .expect(200)
      .end(done);
  });
});
