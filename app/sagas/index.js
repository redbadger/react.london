import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { deployContent } from '../api/';

export function* watchDeploy() {
  yield takeLatest('DEPLOY_CONTENT', callDeploy)
}

export function* callDeploy(payload) {
  yield call(deployContent, payload.environment, payload.content);
}