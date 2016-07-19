//
// A data layer backend that queries Badger Brain for state.
// i.e. the real data :)
//

import * as http from '../http-client';

// TODO inject this value
const communityID = 'V3-PWiMAAGEz2yz5';
// TODO inject this value
export const badgerBrainURL = 'https://brain-staging.red-badger.com/graphql';

export const siteStateQuery = `
query {
  community(id: "${communityID}") {
    title
    summary
    mailingListTitle
    featuredEvent {
      title
      startDateTime {
        iso
      }
      endDateTime {
        iso
      }
      talks {
        id
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
