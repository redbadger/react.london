import { makeFetch } from '../api';
import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects';
import { initialize } from 'redux-form';


export function* fetchContent() {
  try {
    yield put({ type: 'FETCHING_CONTENT' });

    // TODO: remove hardcoded localhost url
    const content = yield call(makeFetch, 'http://localhost:8080/content');

    yield put(initialize('editor', content));
    yield put({ type: 'FETCHED_CONTENT' });
  } catch (e) {
    yield put({ type: 'CONTENT_FETCH_FAILED', message: e.message });
  }
};

export function* fetchContentRequested() {
  yield* takeLatest('CONTENT_FETCH_REQUESTED', fetchContent);
}
