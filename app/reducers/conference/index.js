import { STATE_LOADED } from '../../actions/persistence';

export default function conference(state = {}, action) {
  switch (action.type) {
    case STATE_LOADED:
      return action.conference;

    default:
      return state;
  }
}
