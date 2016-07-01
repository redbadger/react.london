import { actionTypes as formActions } from 'redux-form';
import { PUBLISH_SITE_SUCCESS } from '../../actions/persistence';

export default function unsavedChanges(state = false, action) {
  switch (action.type) {
    case PUBLISH_SITE_SUCCESS:
      return false;

    case formActions.CHANGE:
      return true;

    default:
      return state;
  }
}
