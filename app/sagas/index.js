import { makeFetch } from '../api';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { initialize } from 'redux-form';

export function* fetchContent() {
  try {
    yield put({ type: 'FETCHING_CONTENT' });

    // TODO: remove hardcoded localhost url
    const content = yield call(makeFetch, 'http://127.0.0.1:5984/reactlondon/9db6c9bd6871df4fddcef7a3bb000d1a');

    yield put(initialize('editor', content));
    yield put({ type: 'FETCHED_CONTENT' });
  } catch (e) {
    yield put({ type: 'CONTENT_FETCH_FAILED', message: e.message });
  }
};

export function* fetchContentRequested() {
  yield* takeLatest('CONTENT_FETCH_REQUESTED', fetchContent);
}
