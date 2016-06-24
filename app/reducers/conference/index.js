import { SITE_STATE_LOADED } from '../../actions/persistence';

export default function conference(state = {}, action) {
  switch (action.type) {
    case SITE_STATE_LOADED:
      return action.conference;

    default:
      return state;
  }
}
