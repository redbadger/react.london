import * as http from '.';

const jsonValue = { ok: 'ok' };
const jsonPromise = new Promise(resolve => resolve(jsonValue));

describe('http-client postGraphQL', () => {
  const successResponse = {
    status: 200,
    json: () => jsonPromise,
  };

  it('passes through url, headers and body to the fetch function', () => {
    let fetchParams;
    const fetchFn = (...args) => {
      fetchParams = args;
      return new Promise(resolve => resolve(successResponse));
    };
    return http.postGraphQL('/my-url', 'this is the body', fetchFn)
      .then(() => {
        expect(fetchParams[0]).to.equal('/my-url');
        expect(fetchParams[1].body).to.equal('this is the body');
        expect(fetchParams[1].headers).to.deep.equal({
          Accept: 'application/json',
          'Content-Type': 'application/graphql',
        });
      });
  });

  it('throws when the status is not 2xx or 3xx', () => {
    const response = {
      status: 400,
      statusText: 'Oh no! it broke',
    };
    const fetchFn = () => new Promise(resolve => resolve(response));
    return http.postGraphQL('/', {}, fetchFn)
      .catch(err => {
        expect(err.response).to.equal(response);
        expect(err.message).to.equal(response.statusText);
      });
  });

  it('parses and returns JSON when successful', () => {
    const fetchFn = () => new Promise(resolve => resolve(successResponse));
    return http.postGraphQL('/', {}, fetchFn)
      .then(data => {
        expect(data).to.equal(jsonValue);
      });
  });
});
