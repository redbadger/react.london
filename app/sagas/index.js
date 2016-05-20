import { getDocId, getDoc, saveDoc } from '../api';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { initialize, change } from 'redux-form';

export function* watchGetContent() {
  yield* takeLatest('GET_CONTENT_REQUESTED', getContent);
}

function* getContent() {
  try {
    yield put({ type: 'GETTING_CONTENT' });

    const docId = yield call(getDocId);
    const content = yield call(getDoc, docId);

    yield put(initialize('editor', content));
    yield put({ type: 'GET_CONTENT_SUCCESS' });
  } catch (e) {
    yield put({
      type: 'API_ERROR',
      message: `Error retrieving editor content. Error message: ${e.message}`,
    });
  }
};

export function* watchSaveContent() {
  yield* takeLatest('SAVE_CONTENT_REQUESTED', saveContent);
}

function* saveContent(action) {
  try {
    yield put({ type: 'SAVING_CONTENT' });

    const content = yield call(saveDoc, action.content);

    yield put(change('editor', '_rev', content.rev));
    yield put({ type: 'SAVE_CONTENT_SUCCESS' });

  } catch (e) {
    yield put({
      type: 'API_ERROR',
      message: `Error saving editor content. Error message: ${e.message}`,
    });
  }
}
