import request from 'supertest';
import app from '../app';

describe('GET /__health__', () => {
  it('returns 200, to be checked by load balancer', done => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});

describe('GET /', () => {
  it('renders OK', done => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});

describe('GET /conference', () => {
  it('/renders OK', done => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});