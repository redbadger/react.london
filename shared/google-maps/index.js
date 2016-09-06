import pathOr from 'ramda/src/pathOr';

const prefix = 'http://www.google.com/maps/place/';

const getCoordinates = pathOr({}, ['coordinates']);

export function googleMapsUrl(location) {
  const { latitude, longitude } = getCoordinates(location);
  if (!latitude || !longitude) {
    return null;
  }
  return `${prefix}${latitude},${longitude}`;
}
