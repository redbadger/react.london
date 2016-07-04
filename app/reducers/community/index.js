import { SITE_STATE_LOADED } from '../../actions/persistence';
import { actionTypes as formActions } from 'redux-form';
import { COMMUNITY_FORM } from '../../names/form';
import { buildFormChangeHandler } from '../form-change';

const handleFormChange = buildFormChangeHandler(COMMUNITY_FORM);

export default function community(state = {}, action) {
  switch (action.type) {
    case SITE_STATE_LOADED:
      return action.community;

    case formActions.CHANGE:
      return handleFormChange(state, action);

    default:
      return state;
  }
}
