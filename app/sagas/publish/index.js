import * as api from '../../api';
import { takeEvery } from 'redux-saga';
import { call } from 'redux-saga/effects';
import { PUBLISH_SITE_STATE } from '../../actions/persistence';

export function* publishWorker(action) {
  yield call(api.publishSiteState, action);
  // TODO: result handling
}

export function* publishWatcher() {
  yield* takeEvery(PUBLISH_SITE_STATE, publishWorker);
}
