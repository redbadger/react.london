export const UPDATE_EVENT = 'UPDATE_EVENT';

export default function updateEvent(eventID, eventData) {
  return {
    type: UPDATE_EVENT,
    eventData,
    eventID,
  };
}
