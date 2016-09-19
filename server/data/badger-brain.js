//
// A data layer backend that queries Badger Brain for state.
// i.e. the real data :)
//

import * as http from '../http-client';
import { getEnvVar } from '../env';


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
      displayLevel
      calendarURL
      status
      ticketLink
      streamingLink
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
    calendarURL
    partners {
      name
      description
      partnerURL
      imageURL
      level
      jobs {
        title
        location
        description
        jobURL
      }
    }
    tickets {
      title
      releaseDate {
        iso
        date
        month
        monthSym
        year
      }
      price
      available
    }
    talks {
      id
      title
      summary
      speakers {
        id
        name
        company
        twitterHandle
        githubHandle
        blogURL
        imageURL
      }
    }
  }
}`;

export function getCommunityState(httpPostFn = http.postGraphQL) {
  return httpPostFn(badgerBrainURL, communityStateQuery);
}

export function getConferenceState(httpPostFn = http.postGraphQL) {
  return httpPostFn(badgerBrainURL, conferenceStateQuery);
}
