import { loadStateWorker } from '.';
import { put, call } from 'redux-saga/effects';
import * as api from '../../api';
import {
  siteStateLoaded,
  siteStateLoadFailed,
} from '../../actions/persistence';

describe('saga loadStateWorker', () => {
  it('fetches state from API and handles success', () => {
    const generator = loadStateWorker();
    expect(
      generator.next().value
    ).to.deep.equal(
      call(api.fetchSiteState)
    );
    const response = {
      data: {
        events: [1, 2],
        community: 'comm',
        conference: 'conf',
      },
    };
    expect(
      generator.next(response).value
    ).to.deep.equal(
      put(siteStateLoaded(response.data))
    );
  });

  it('fetches state from API and handles failure', () => {
    const generator = loadStateWorker();
    expect(
      generator.next().value
    ).to.deep.equal(
      call(api.fetchSiteState)
    );
    const response = { error: 'sadness :(' };
    expect(
      generator.next(response).value
    ).to.deep.equal(
      put(siteStateLoadFailed(response.error))
    );
  });
});
