require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import { call, put } from 'redux-saga/effects';

export function* formatContent(payload) {
  console.log('formatContent payload ', payload.json());
  yield put({ type: 'FETCHED_CONTENT', payload: payload });
};

export const makeFetch = (url) => {
  return fetch(url).then((res) => { res.json()
    .then((output) => {
      console.log('makeFetch res ', output);
      return output;
    });
  });
};

export function* fetchContent() {
  try {
    yield put({ type: 'FETCHING_CONTENT' });
    // TODO: remove hardcoded localhost url
    const content = yield call(makeFetch, 'http://localhost:8080/content');
    yield call(formatContent, content);
  } catch (e) {
    yield put({ type: 'CONTENT_FETCH_FAILED', message: e.message });
  }
};
