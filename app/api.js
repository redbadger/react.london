const SITE_ENDPOINT = '/site';

export function fetchSiteState() {
  return fetch(SITE_ENDPOINT, {
    credentials: 'same-origin',
  })
  .then(response => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Unable to load site content from server');
  })
  .catch(error => { throw error; });
}
