function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

export function post(url, body, fetchFn = fetch) {
  const headers = {
    Accept: 'application/json',
  };
  return fetchFn(url, {
    method: 'POST',
    headers,
    body,
  })
  .then(checkStatus)
  .then(parseJSON);
}
