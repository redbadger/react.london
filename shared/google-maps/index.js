import pathOr from 'ramda/src/pathOr';

const prefix = 'http://www.google.com/maps/place/';

const getCoordinates = pathOr({}, ['coordinates']);

export function googleMapsUrl(location) {
  // We don't want a maps url for a remote event
  const address = pathOr('', ['address'], location);
  if (address.toLowerCase() === 'remote') return null;

  const { latitude, longitude } = getCoordinates(location);
  if (!latitude || !longitude) {
    return null;
  }
  return `${prefix}${latitude},${longitude}`;
}
