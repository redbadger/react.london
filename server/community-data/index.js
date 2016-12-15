const MAX_EVENTS = 3;

function featuredEvents(events) {
  return events.filter(e => e.displayLevel === 'Featured' || e.displayLevel === 'Current');
}

function futureEvents(events) {
  return events
    .filter(e => e.displayLevel === 'Highlighted' || e.displayLevel === 'Upcoming')
    .slice(0, MAX_EVENTS);
}

export default function communityData(state) {
  if (!state || !state.community) { return {}; }
  const {
    title,
    summary,
    mailingListTitle,
    mailingListSummary,
    events,
  } = state.community;
  const data = {
    title,
    summary,
    mailingListTitle,
    mailingListSummary,
    featuredEvents: featuredEvents(events),
    futureEvents: futureEvents(events),
  };
  return data;
}
