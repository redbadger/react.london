import express from 'express';
import request from 'supertest';
import router from '.';

const app = express().use(router);

describe('GET /', () => {
  it('/', done => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});

describe('GET /conference', () => {
  it('/conference', done => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});
