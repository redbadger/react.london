import 'isomorphic-fetch';

const SITE_ENDPOINT = '/site';

function assertStatusOK(response) {
  if (response.ok) { return response; }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function post(url, object) {
  const body = JSON.stringify(object);
  return fetch(url, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  })
  .then(assertStatusOK)
  .then(parseJSON);
}

function get(url) {
  return fetch(url, {
    credentials: 'same-origin',
  })
  .then(assertStatusOK)
  .then(parseJSON);
}

export function fetchSiteState() {
  return get(SITE_ENDPOINT);
}

export function publishSiteState({ community, conference, events }) {
  return post(SITE_ENDPOINT, { community, conference, events });
}
