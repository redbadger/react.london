import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';

import events from './events';
import community from './community';

const reducers = combineReducers({
  form,
  routing,
  events,
  community,
});

export default reducers;
