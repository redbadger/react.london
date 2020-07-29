const { pathOr } = require('ramda');

export function isRemoteEvent(location) {
  const address = pathOr('', ['address'], location);
  return address.toLowerCase() === 'remote';
}
