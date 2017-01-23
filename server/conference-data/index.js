import R, { uniq, chain } from 'ramda';

const groupPartnersByLevel = R.groupBy(p => p.level.toLowerCase());

export const pickSpeakersFromTalks = (talks) => {
  // Talks contain speakers, but there is a chance that
  // same speaker would participate in multiple talks
  // We need to make sure we get a list of unique speakers
  if (talks) {
    // This is a list of all speakers with an added property
    // of talks
    const speakers = uniq(chain(talk => talk.speakers, talks));

    // Lookup the speakers' talk and add that talk information
    return chain(speaker => {
      const speakerWithTalks = speaker;
      speakerWithTalks.talks = [];
      talks.forEach(talk => {
        if (talk.speakers && talk.speakers.filter(each => each.id === speaker.id).length > 0) {
          speakerWithTalks.talks.push({ id: talk.id, title: talk.title, summary: talk.summary });
        }
      });
      return speakerWithTalks;
    }, speakers);
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
    talks,
  };
}
