import request from 'supertest';
import app from '../app';
import { useDummyData } from '../../test/mock-data-source';

describe('GET /__health__', () => {
  it('returns 200, to be checked by load balancer', () => {
    request(app)
      .get('/__health__')
      .expect(200);
  });
});

describe('GET /', () => {
  it('redirects', () => {
    return request(app)
      .get('/')
      .expect(302)
      .expect('LOCATION', '/community');
  });
});

describe('GET /conference', () => {
  it('/renders OK', () => {
    useDummyData();
    return request(app)
      .get('/conference')
      .expect(200);
  });
});

describe('GET /community', () => {
  it('/renders OK', () => {
    useDummyData();
    return request(app)
      .get('/community')
      .expect(200);
  });
});

// TODO: Sad path tests. And also sad path implementation.
