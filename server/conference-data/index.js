import R from 'ramda';

const groupPartnersByLevel = R.groupBy(p => p.level.toLowerCase());

export default function communityData(state) {
  if (!state || !state.event) { return {}; }
  const { partners, tickets, calendarURL } = state.event;

  return {
    ...groupPartnersByLevel(partners || []),
    tickets,
    calendarURL,
  };
}
