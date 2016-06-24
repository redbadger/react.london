import { fork } from 'redux-saga/effects';

import { loadStateWorker } from './load-state';

export default function* rootSaga() {
  yield fork(loadStateWorker);
}
