import { UPDATE_EVENT } from '../../actions/community_events';

export default function events(state = {}, action) {
  switch (action.type) {
    case UPDATE_EVENT:
      return {
        ...state,
        [action.eventID]: action.eventData,
      };

    default:
      return state;
  }
}
