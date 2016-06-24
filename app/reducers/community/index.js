import { SITE_STATE_LOADED } from '../../actions/persistence';

export default function community(state = {}, action) {
  switch (action.type) {
    case SITE_STATE_LOADED:
      return action.community;

    default:
      return state;
  }
}
