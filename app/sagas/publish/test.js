import { take, fork } from 'redux-saga/effects';
import { PUBLISH_SITE_STATE } from '../../actions/persistence';
import { publishWatcher, publishWorker } from '.';

describe('/sagas/publish publishWorker', () => {
  it('listens to PUBLISH_SITE_STATE', () => {
    const saga = publishWatcher();
    expect(
      saga.next().value
    ).to.deep.equal(
      take(PUBLISH_SITE_STATE)
    );
    const action = {};
    expect(
      saga.next(action).value
    ).to.deep.equal(
      fork(publishWorker, action)
    );
  });
});
