import R, { uniq, chain } from 'ramda';

const groupPartnersByLevel = R.groupBy(p => p.level.toLowerCase());

export const pickSpeakersFromTalks = (talks) => {
  // Talks contain speakers, but there is a chance that
  // same speaker would participate in multiple talks
  // We need to make sure we get a list of unique speakers
  if (talks) {
    return uniq(chain(talk => talk.speakers, talks));
  }

  return [];
};

export default function communityData(state) {
  if (!state || !state.event) { return {}; }
  const { partners, tickets, talks, calendarURL } = state.event;
  const speakers = pickSpeakersFromTalks(talks);

  return {
    ...groupPartnersByLevel(partners || []),
    tickets,
    speakers,
    calendarURL,
  };
}
