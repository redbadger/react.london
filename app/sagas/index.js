import { put } from 'redux-saga/effects';
import { stateLoaded, stateLoadFailed } from '../actions/persistence';
import * as api from '../api';

export default function * rootSaga() {
  try {
    const { data } = yield api.fetchInitialState();
    yield put(stateLoaded(data));
  } catch (e) {
    console.log('error:', e);
    yield put(stateLoadFailed(e));
  }
}
