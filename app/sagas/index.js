import { getDocId, getDoc, saveDoc, syncDatabase } from '../api';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { initialize, change } from 'redux-form';

export function* watchGetContent() {
  yield* takeLatest('GET_CONTENT_REQUESTED', getContent);
}

export function* loadFromDB() {
  const docId = yield call(getDocId);
  yield call(getDoc, docId);
}

export function populateView() {

}

export function* getContent() {
  yield call(loadFromDB);
  yield call(populateView);
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



export function* watchSyncDb() {
  yield* takeLatest('SYNC_DB_REQUESTED', syncDb);
}

function* syncDb(action) {
  try {
    yield put({ type: 'SYNCING' });
    yield call(syncDatabase, action.url);
    yield put({ type: 'SYNC_SUCCESS' });

  } catch (e) {
    yield put({
      type: 'API_ERROR',
      message: `Error saving editor content. Error message: ${e.message}`,
    });
  }
}
