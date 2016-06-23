export const STATE_LOADED = 'STATE_LOADED';
export const STATE_LOAD_FAILED = 'STATE_LOAD_FAILED';

export function stateLoaded({ community, conference, events }) {
  return {
    type: STATE_LOADED,
    community,
    conference,
    events,
  };
}

export function stateLoadFailed(error) {
  console.error('Failed to load state.', error);
  return {
    type: STATE_LOAD_FAILED,
    error,
  };
}
