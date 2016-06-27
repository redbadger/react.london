export const SITE_STATE_LOADED = 'SITE_STATE_LOADED';
export const STATE_LOAD_FAILED = 'STATE_LOAD_FAILED';
export const PUBLISH_SITE_STATE = 'PUBLISH_SITE_STATE';
export const PUBLISH_SITE_SUCCESS = 'PUBLISH_SITE_SUCCESS';

export function publishSiteState({ community, conference, events }) {
  return {
    type: PUBLISH_SITE_STATE,
    community,
    conference,
    events,
  };
}

export function publishSiteSuccess() {
  return {
    type: PUBLISH_SITE_SUCCESS,
  };
}

export function siteStateLoaded({ community, conference, events }) {
  return {
    type: SITE_STATE_LOADED,
    community,
    conference,
    events,
  };
}

export function siteStateLoadFailed(error) {
  return {
    type: STATE_LOAD_FAILED,
    error,
  };
}
