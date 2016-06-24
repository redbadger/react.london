export const UPDATE_EVENT = 'UPDATE_EVENT';

export function updateEvent(eventID, event) {
  return {
    type: UPDATE_EVENT,
    eventID,
    event,
  };
}
