import { SITE_STATE_LOADED } from '../../actions/persistence';
import { actionTypes as formActions } from 'redux-form';
import { COMMUNITY_FORM } from '../../names/form';

function handleFormChange(state, action) {
  if (action.meta.form === COMMUNITY_FORM) {
    return {
      ...state,
      [action.meta.field]: action.payload,
    };
  }
  return state;
}

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
