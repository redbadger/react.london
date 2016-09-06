import R from 'ramda';

const groupPartnersByLevel = R.groupBy(p => p.level.toLowerCase());

export const pickSpeakersFromTalks = (talks) => {
  // Talks contain speakers, but there is a chance that
  // same speaker would participate in multiple talks
  // We need to make sure we get a list of unique speakers
  const speakers = [];
  if (talks) {
    talks.forEach((talk) => {
      const filteredSpeakers = talk.speakers.filter((speaker) => {
        if (!speakers.find((s) => s.id === speaker.id)) {
          return speaker;
        }
        return null;
      });

      speakers.push(...filteredSpeakers);
    });
  }
  return speakers;
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
