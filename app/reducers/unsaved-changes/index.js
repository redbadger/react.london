import { actionTypes as formActions } from 'redux-form';

export default function unsavedChanges(state = false, action) {
  switch (action.type) {
    case formActions.CHANGE:
      return true;

    default:
      return state;
  }
}
