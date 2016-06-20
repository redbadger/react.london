const INITIAL_STATE = '/api/state';

export function fetchInitialState() {
  return fetch(INITIAL_STATE, {
    credentials: 'same-origin',
  })
  .then(response => response.json()
  .then(json => json.data));
}
