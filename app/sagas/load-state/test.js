import { initialize as formInit } from 'redux-form';
import { loadStateWorker } from '.';
import { put, call } from 'redux-saga/effects';
import { eventIDToFormName } from '../../names/event';
import { COMMUNITY_FORM, CONFERENCE_FORM } from '../../names/form';
import * as api from '../../api';
import {
  siteStateLoaded,
  siteStateLoadFailed,
} from '../../actions/persistence';

describe('saga loadStateWorker', () => {
  it('fetches state from API and handles success, loading forms', () => {
    const generator = loadStateWorker();
    expect(
      generator.next().value
    ).to.deep.equal(
      call(api.fetchSiteState)
    );
    const response = {
      data: {
        events: { 1: 1, 2: 2 },
        community: 'comm',
        conference: 'conf',
      },
    };
    expect(generator.next(response).value).to.deep.equal(
      put(siteStateLoaded(response.data))
    );
    expect(generator.next().value).to.deep.equal(
      put(formInit(COMMUNITY_FORM, 'comm'))
    );
    expect(generator.next().value).to.deep.equal(
      put(formInit(CONFERENCE_FORM, 'conf'))
    );
    expect(generator.next().value).to.deep.equal(
      put(formInit(eventIDToFormName('1'), 1))
    );
    expect(generator.next().value).to.deep.equal(
      put(formInit(eventIDToFormName('2'), 2))
    );
    expect(generator.next().done).to.equal(true);
  });

  it('fetches state from API and handles failure', () => {
    const generator = loadStateWorker();
    expect(
      generator.next().value
    ).to.deep.equal(
      call(api.fetchSiteState)
    );
    expect(
      generator.throw('an error occured!').value
    ).to.deep.equal(
      put(siteStateLoadFailed('an error occured!'))
    );
    expect(generator.next().done).to.equal(true);
  });
});
