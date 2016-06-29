const SITE_ENDPOINT = '/site';

export function fetchSiteState() {
  return fetch(SITE_ENDPOINT, {
    credentials: 'same-origin',
  })
  .then(response => {
    if (response.status === 200) return response.json();
    throw new Error('Unable to load site content from server');
  })
  .catch(error => { throw error; });
}

export function publishSiteState({ community, conference, events }) {
  const body = JSON.stringify({ community, conference, events });
  return fetch(SITE_ENDPOINT, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  })
  .then(response => {
    if (response.status === 201) return response.json();
    throw new Error('Unable to publush site content');
  })
  .catch(error => { throw error; });
}
