import * as api from '../../api';
import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
  PUBLISH_SITE_STATE,
  publishSiteSuccess,
} from '../../actions/persistence';

export function* publishWorker(action) {
  try {
    yield call(api.publishSiteState, action);
    yield put(publishSiteSuccess());
  } catch (error) {
    console.error(error);
    // TODO
    // yield put(publishUnsuccessful(error));
  }
}

export function* publishWatcher() {
  yield* takeEvery(PUBLISH_SITE_STATE, publishWorker);
}
