import { makeFetch } from '../api';
import { call, put } from 'redux-saga/effects';

export function* formatContent(payload) {
  yield put({ type: 'FETCHED_CONTENT', payload: payload });
};

export function* fetchContent() {
  try {
    yield put({ type: 'FETCHING_CONTENT' });
    // TODO: remove hardcoded localhost url
    const content = yield call(makeFetch, 'http://localhost:8080/content');
    yield call(formatContent, content);
    return content
  } catch (e) {
    yield put({ type: 'CONTENT_FETCH_FAILED', message: e.message });
  }
};
