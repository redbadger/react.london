import request from 'supertest';
import app from './app';
import { useDummyData } from './../test/mock-data-source';

describe('server routing', () => {
  describe('GET /__health__', () => {
    it('returns 200, to be checked by load balancer', () => {
      return request(app)
        .get('/__health__')
        .expect(200);
    });
  });

  describe('GET /__health__', () => {
    it('returns 200', () => {
      return request(app)
        .get('/__health__')
        .expect(200);
    });
  });

  describe('when the hostname is meetup.react.london', () => {
    function get(path) {
      return request(app)
        .get(path)
        .set('host', 'meetup.react.london');
    }

    it('GET / renders OK', () => {
      useDummyData();
      return get('/')
        .expect(/React London/)
        .expect(/Community/)
        .expect(200);
    });

    it('GET /community redirects to /', () => {
      useDummyData();
      return get('/community')
        .expect(302)
        .expect('LOCATION', '/');
    });

    it('GET /conference redirects to conference site', () => {
      return get('/conference')
        .expect(302)
        .expect('LOCATION', process.env.CONFERENCE_URL);
    });
  });


  describe('when the hostname is react.london', () => {
    function get(path) {
      return request(app)
        .get(path)
        .set('host', 'react.london');
    }

    it('GET / renders OK', () => {
      return get('/')
        .expect(/React London/)
        .expect(/Conference/)
        .expect(200);
    });

    it('GET /conference redirects to /', () => {
      return get('/conference')
        .expect(302)
        .expect('LOCATION', '/');
    });

    it('GET /community redirects', () => {
      return get('/community')
        .expect(302)
        .expect('LOCATION', process.env.COMMUNITY_URL);
    });
  });
});

// TODO: Sad path tests. And also sad path implementation.
