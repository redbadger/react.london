//
// A data layer backend that queries Badger Brain for state.
// i.e. the real data :)
//

import * as http from '../http-client';

function getEnvVar(key) {
  const value = process.env[key];
  if (process.env.NODE_ENV !== 'test' && !value) {
    throw new Error(`Missing ${key} env var`);
  }
  return value;
}

export const communityID = getEnvVar('BADGER_BRAIN_COMMUNITY_ID');
export const conferenceID = getEnvVar('BADGER_BRAIN_CONFERENCE_ID');
export const badgerBrainURL = getEnvVar('BADGER_BRAIN_ENDPOINT');

export const communityStateQuery = `
query {
  community(id: "${communityID}") {
    title
    summary
    mailingListTitle
    mailingListSummary
    events {
      title
      eventType
      ticketsAvailable
      waitingListOpen
      displayLevel
      startDateTime {
        iso
      }
      endDateTime {
        iso
      }
      ticketReleaseDate {
        iso
      }
      externalLinks {
        url
        title
        type
      }
      location {
        address
        coordinates {
          latitude
          longitude
        }
      }
      schedule {
        datetime
        text
      }
      sponsors {
        websiteURL
        imageURL
        name
      }
      talks {
        summary
        title
        speakers {
          name
          company
          twitterHandle
          githubHandle
          blogURL
          imageURL
        }
      }
    }
  }
}`;

export const conferenceStateQuery = `
query {
  event(id: "${conferenceID}") {
    partners {
      name
      description
      partnerURL
      imageURL
      level
    }
  }
}`;

export function getCommunityState(httpPostFn = http.postGraphQL) {
  return httpPostFn(badgerBrainURL, communityStateQuery);
}

export function getConferenceState(httpPostFn = http.postGraphQL) {
  return httpPostFn(badgerBrainURL, conferenceStateQuery);
}
