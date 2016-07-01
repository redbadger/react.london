import { fork } from 'redux-saga/effects';

import { loadStateWorker } from './load-state';
import { publishWatcher } from './publish';

export default function* rootSaga() {
  yield fork(loadStateWorker);
  yield fork(publishWatcher);
}
