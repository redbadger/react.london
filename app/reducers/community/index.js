import { STATE_LOADED } from '../../actions/persistence';

export default function community(state = {}, action) {
  switch (action.type) {
    case STATE_LOADED:
      return action.community;

    default:
      return state;
  }
}
