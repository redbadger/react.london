import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistentReducer } from 'redux-pouchdb-plus';

const reducers = combineReducers({ form: formReducer });

export default persistentReducer(reducers);
