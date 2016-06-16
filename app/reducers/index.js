import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import events from './events';

const reducers = combineReducers({
  form,
  routing,
  events,
});

export default reducers;
