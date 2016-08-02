import request from 'supertest';
import app from '../app';
import { useDummyData } from '../../test/mock-data-source';

describe('GET /__health__', () => {
  it('returns 200, to be checked by load balancer', () => {
    return request(app)
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

// describe.only('GET /community', () => {
//   it('/renders OK', () => {
//     useDummyData();
//     return request(app)
//       .get('/community')
//       .expect(200)
//       .expect((res) => {
//         console.log('HELLO!', res);
//       });
//   });
// });

// TODO: Sad path tests. And also sad path implementation.
