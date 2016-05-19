require('es6-promise').polyfill();
require('isomorphic-fetch');

export const makeFetch = url => fetch(url)
  .then(res => handleResponse(res))
  .then(data => data);

export const makePut = (url, content) => fetch(url, {
    body: JSON.stringify(content),
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
  })
  .then(res => handleResponse(res))
  .then(data => data);

const handleResponse = res => {
  if (res.status >= 400)
    throw new Error(res.statusText);

  return res.json();
};
