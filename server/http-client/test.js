import * as http from '.';

const jsonValue = { ok: 'ok' };
const jsonPromise = new Promise(resolve => resolve(jsonValue));

describe('http-client postGraphQL', () => {
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
    http.postGraphQL('/my-url', 'this is the body', fetchFn)
      .then(() => {
        expect(fetchParams[0]).to.equal('/my-url');
        expect(fetchParams[1].body).to.equal('this is the body');
        expect(fetchParams[1].headers).to.deep.equal({
          Accept: 'application/json',
          'Content-Type': 'application/graphql',
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
    http.postGraphQL('/', {}, fetchFn)
      .catch(err => {
        expect(err.response).to.equal(response);
        expect(err.message).to.equal(response.statusText);
        done();
      })
      .catch(done);
  });

  it('parses and returns JSON when successful', done => {
    const fetchFn = () => new Promise(resolve => resolve(successResponse));
    http.postGraphQL('/', {}, fetchFn)
      .then(data => {
        expect(data).to.equal(jsonValue);
        done();
      })
      .catch(done);
  });
});
