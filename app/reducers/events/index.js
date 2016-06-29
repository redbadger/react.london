import { UPDATE_EVENT } from '../../actions/community_events';
import { SITE_STATE_LOADED } from '../../actions/persistence';
import { actionTypes as formActions } from 'redux-form';

function handleFormChange(state, action) {
  const match = /^event::(.+)$/.exec(action.meta.form);
  if (match) {
    const id = match[1];
    const event = (state[id] || {});
    const newEvent = {
      ...event,
      [action.meta.field]: action.payload,
    };
    return { ...state, [id]: newEvent };
  }
  return state;
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
