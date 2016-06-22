import { put } from 'redux-saga/effects';
import { stateLoaded, stateLoadFailed } from '../../actions/persistence';
import * as api from '../../api';

export function* loadStateWorker() {
  const res = yield api.fetchSiteState();
  if (res.error) {
    yield put(stateLoadFailed(res.error));
  } else {
    yield put(stateLoaded(res.data));
  }
}
