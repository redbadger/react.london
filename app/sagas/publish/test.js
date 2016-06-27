import * as api from '../../api';
import { put, call, take, fork } from 'redux-saga/effects';
import { publishWatcher, publishWorker } from '.';
import {
  PUBLISH_SITE_STATE,
  publishSiteState,
  publishSiteSuccess,
  publishSiteFailure,
} from '../../actions/persistence';

describe('/sagas/publish publishWatcher', () => {
  it('listens to PUBLISH_SITE_STATE', () => {
    const saga = publishWatcher();
    expect(saga.next().value).to.deep.equal(take(PUBLISH_SITE_STATE));
    const action = {};
    expect(
      saga.next(action).value
    ).to.deep.equal(
      fork(publishWorker, action)
    );
    expect(saga.next().value).to.deep.equal(take(PUBLISH_SITE_STATE));
  });
});

describe('/sagas/publish publishWorker', () => {
  const community = { comm: 1 };
  const conference = { conf: 2 };
  const events = { first: { ev: 7 } };
  const pubAction = publishSiteState({ community, conference, events });

  it('calls the publish api and handles success', () => {
    const saga = publishWorker(pubAction);
    expect(
      saga.next().value
    ).to.deep.equal(
      call(api.publishSiteState, pubAction)
    );
    expect(
      saga.next().value
    ).to.deep.equal(
      put(publishSiteSuccess())
    );
    expect(saga.next().done).to.equal(true);
  });

  it('calls the publish api and handles failure', () => {
    const saga = publishWorker(pubAction);
    expect(
      saga.next().value
    ).to.deep.equal(
      call(api.publishSiteState, pubAction)
    );
    expect(
      saga.throw(new Error('Oh no!')).value
    ).to.deep.equal(
      put(publishSiteFailure(new Error('Oh no!')))
    );
    expect(saga.next().done).to.equal(true);
  });
});
