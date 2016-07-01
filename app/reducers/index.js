import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';

import events from './events';
import community from './community';
import conference from './conference';
import unsavedChanges from './unsaved-changes';

const reducers = combineReducers({
  form,
  routing,
  events,
  community,
  conference,
  unsavedChanges,
});

export default reducers;
