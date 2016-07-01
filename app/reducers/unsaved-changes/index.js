import { actionTypes as formActions } from 'redux-form';
import { PUBLISH_SITE_SUCCESS, SITE_STATE_LOADED } from '../../actions/persistence';

export default function unsavedChanges(state = false, action) {
  switch (action.type) {
    case PUBLISH_SITE_SUCCESS:
    case SITE_STATE_LOADED:
      return false;

    case formActions.CHANGE:
      return true;

    default:
      return state;
  }
}
