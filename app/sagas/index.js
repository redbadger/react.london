import { makeFetch, makePut } from '../api';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { initialize, change } from 'redux-form';

// TODO: remove hardcoded localhost url
const docId = '9db6c9bd6871df4fddcef7a3bb000d1a';

export function* fetchContent() {
  try {
    yield put({ type: 'FETCHING_CONTENT' });

    const content = yield call(makeFetch, docId);

    yield put(initialize('editor', content));
    yield put({ type: 'FETCHED_CONTENT' });
  } catch (e) {
    yield put({
      type: 'FETCH_ERROR',
      message: `Error retrieving editor content. Error message: ${e.message}`,
    });
  }
};

export function* fetchContentRequested() {
  yield* takeLatest('CONTENT_FETCH_REQUESTED', fetchContent);
}

export function* putContent(action) {
  try {
    yield put({ type: 'PUTTING_CONTENT' });

    const content = yield call(makePut, action.content);

    yield put(change('editor', '_rev', content.rev));
    yield put({ type: 'PUT_CONTENT_SUCCESS' });

  } catch (e) {
    yield put({
      type: 'FETCH_ERROR',
      message: `Error saving editor content. Error message: ${e.message}`,
    });
  }
}

export function* putContentRequested() {
  yield* takeLatest('CONTENT_PUT_REQUESTED', putContent);
}
