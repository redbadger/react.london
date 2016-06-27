import { UPDATE_EVENT } from '../../actions/community_events';
import { SITE_STATE_LOADED } from '../../actions/persistence';
import { actionTypes as formActions } from 'redux-form';

function handleFormChange(state, action) {
  const id = /::(.+)$/.exec(action.meta.form)[1];
  const event = (state[id] || {});
  const newEvent = {
    ...event,
    [action.meta.field]: action.payload,
  };
  return { ...state, [id]: newEvent };
}

export default function events(state = {}, action) {
  switch (action.type) {
    case UPDATE_EVENT:
      return { ...state, [action.eventID]: action.event };

    case SITE_STATE_LOADED:
      return action.events;

    case formActions.CHANGE:
      return handleFormChange(state, action);

    default:
      return state;
  }
}
