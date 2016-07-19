import * as http from '.';

const jsonValue = { ok: 'ok' };
const jsonPromise = new Promise(resolve => resolve(jsonValue));

describe('http post', () => {
  const successResponse = {
    status: 200,
    json: () => jsonPromise,
  };

  it('passes through url, headers and body to the fetch function', done => {
    let fetchParams;
    const fetchFn = (...args) => {
      fetchParams = args;
      return new Promise(resolve => resolve(successResponse));
    };
    http.post('/my-url', { team: 'yellow' }, fetchFn)
      .then(() => {
        expect(fetchParams[0]).to.equal('/my-url');
        expect(fetchParams[1].body).to.equal('{"team":"yellow"}');
        expect(fetchParams[1].headers).to.deep.equal({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        });
        done();
      })
      .catch(done);
  });

  it('throws when the status is not 2xx or 3xx', done => {
    const response = {
      status: 400,
      statusText: 'Oh no! it broke',
    };
    const fetchFn = () => new Promise(resolve => resolve(response));
    http.post('/', {}, fetchFn)
      .catch(err => {
        expect(err.response).to.equal(response);
        expect(err.message).to.equal(response.statusText);
        done();
      })
      .catch(done);
  });

  it('parses and returns JSON when successful', done => {
    const fetchFn = () => new Promise(resolve => resolve(successResponse));
    http.post('/', {}, fetchFn)
      .then(data => {
        expect(data).to.equal(jsonValue);
        done();
      })
      .catch(done);
  });
});
