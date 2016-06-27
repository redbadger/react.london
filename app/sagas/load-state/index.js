import { put, call } from 'redux-saga/effects';
import * as api from '../../api';
import {
  siteStateLoaded, siteStateLoadFailed,
} from '../../actions/persistence';

export function* loadStateWorker() {
  try {
    const res = yield call(api.fetchSiteState);
    yield put(siteStateLoaded(res.data));
  } catch (error) {
    yield put(siteStateLoadFailed(error));
  }
}
