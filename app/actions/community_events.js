export const UPDATE_EVENT = 'UPDATE_EVENT';
export const SET_EVENTS = 'SET_EVENTS';

export function updateEvent(eventID, event) {
  return {
    type: UPDATE_EVENT,
    eventID,
    event,
  };
}

export function setEvents(events) {
  return {
    type: SET_EVENTS,
    events,
  };
}
