import { put, call } from 'redux-saga/effects';
import * as api from '../../api';
import {
  siteStateLoaded, siteStateLoadFailed,
} from '../../actions/persistence';

export function* loadStateWorker() {
  const res = yield call(api.fetchSiteState);
  if (res.error) {
    yield put(siteStateLoadFailed(res.error));
  } else {
    yield put(siteStateLoaded(res.data));
  }
}
