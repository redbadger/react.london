import { SITE_STATE_LOADED } from '../../actions/persistence';
import { actionTypes as formActions } from 'redux-form';
import { CONFERENCE_FORM } from '../../names/form';

function handleFormChange(state, action) {
  if (action.meta.form === CONFERENCE_FORM) {
    return {
      ...state,
      [action.meta.field]: action.payload,
    };
  }
  return state;
}


export default function conference(state = {}, action) {
  switch (action.type) {
    case SITE_STATE_LOADED:
      return action.conference;

    case formActions.CHANGE:
      return handleFormChange(state, action);

    default:
      return state;
  }
}
