import { takeEvery } from 'redux-saga';
import { PUBLISH_SITE_STATE } from '../../actions/persistence';

export function* publishWorker() {
  yield 'TODO'; // TODO
}

export function* publishWatcher() {
  yield* takeEvery(PUBLISH_SITE_STATE, publishWorker);
}
