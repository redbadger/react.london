const MAX_EVENTS = 3;

function featuredEvent(events) {
  return events.find(e => e.displayLevel === 'Featured' || e.displayLevel === 'Current') || {};
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
  return {
    title,
    summary,
    mailingListTitle,
    mailingListSummary,
    featuredEvent: featuredEvent(events),
    futureEvents: futureEvents(events),
  };
}
