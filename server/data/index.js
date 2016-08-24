//
// An interface to the site data source.
// In production Badger Brain is the source.
//

let dataSource;

export function setDataSource(functions) {
  dataSource = functions;
}

export function getCommunityState() {
  return dataSource
    .getCommunityState()
    .then(payload => payload.data);
}

export function getConferenceState() {
  return dataSource
    .getConferenceState()
    .then(payload => payload.data);
}
