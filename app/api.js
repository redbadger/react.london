const SITE_ENDPOINT = '/site';

export function fetchSiteState() {
  return fetch(SITE_ENDPOINT, {
    credentials: 'same-origin',
  })
  .then(response => response.json())
  .catch(error => { throw error; });
}
