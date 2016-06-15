import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import { persistentReducer } from 'redux-pouchdb-plus';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
  form: formReducer,
  routing: routerReducer,
});

// TODO: consider if we want routing data persisted...
// export default persistentReducer(reducers);
export default reducers;
