import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { persistentReducer } from 'redux-pouchdb-plus';

const defaultDeployState = {
  inProgress: false,
  wasSuccessful: false,
}

export const deploy = (state = defaultDeployState, action) => {
  if(action){
    switch (action.type) {
      case 'DEPLOY_CONTENT':
        console.log('DEPLOY_CONTENT');
        return {
          ...state,
          inProgress: true
        }
      case 'DEPLOY_CONTENT_SUCCESSFUL':
        console.log('DEPLOY_CONTENT_SUCCESSFUL');
        return {
          ...state,
          inProgress: false,
          wasSuccessful: true,
        }
      case 'DEPLOY_CONTENT_FAILED':
        console.log('DEPLOY_CONTENT_FAILED');
        return {
          ...state,
          inProgress: false,
          wasSuccessful: false,
        }
      default:
        return state;
    };
  }
  return state;
};

const reducers = combineReducers({
  deploy,
  form
});

export default persistentReducer(reducers);
