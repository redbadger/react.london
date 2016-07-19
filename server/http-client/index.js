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

export function post(url, data, fetchFn = fetch) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify(data);
  return fetchFn(url, {
    method: 'POST',
    headers,
    body,
  })
  .then(checkStatus)
  .then(parseJSON);
}
