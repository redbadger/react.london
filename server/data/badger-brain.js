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
export const badgerBrainURL = getEnvVar('BADGER_BRAIN_ENDPOINT');

export const siteStateQuery = `
query {
  community(id: "${communityID}") {
    title
    summary
    mailingListTitle
    mailingListSummary
    featuredEvent {
      title
      startDateTime {
        iso
      }
      endDateTime {
        iso
      }
      location {
        address
        coordinates {
          latitude
          longitude
        }
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

export function getSiteState(httpPostFn = http.postGraphQL) {
  return httpPostFn(badgerBrainURL, siteStateQuery);
}
