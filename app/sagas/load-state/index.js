import _forOwn from 'lodash/map';
import { put, call } from 'redux-saga/effects';
import { initialize as formInitialize } from 'redux-form';
import { eventIDToFormName } from '../../names/event';
import * as api from '../../api';
import {
  siteStateLoaded, siteStateLoadFailed,
} from '../../actions/persistence';


function buildEventActions(events) {
  const eventActions = [];
  _forOwn(events, (value, key) => {
    const formName = eventIDToFormName(key);
    const action = put(formInitialize(formName, value));
    eventActions.push(action);
  });
  return eventActions;
}

export function* loadStateWorker() {
  try {
    const res = yield call(api.fetchSiteState);
    yield put(siteStateLoaded(res.data));
    yield put(formInitialize('community', res.data.community));
    yield put(formInitialize('conference', res.data.conference));
    yield* buildEventActions(res.data.events);
  } catch (error) {
    yield put(siteStateLoadFailed(error));
  }
}
