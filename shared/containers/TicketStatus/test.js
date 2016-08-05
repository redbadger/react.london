import { mapStateToProps } from '.';
import R from 'ramda';

describe('TicketStatus mapStateToProps', () => {
  const fullState = {
    community: {
      featuredEvent: {
        title: 'Test event',
        ticketsAvailable: false,
        waitingListOpen: true,
        startDateTime: {
          iso: '2016-08-05T13:57:00+0000',
        },
        endDateTime: {
          iso: '2016-08-26T15:56:00+0000',
        },
        ticketReleaseDate: {
          iso: '2016-08-02T16:19:00+0000',
        },
        externalLinks: [
          { url: 'google.com', title: 'EventBrite', type: 'TICKET' },
          { url: 'google.com', title: 'EventStreamLink', type: 'STREAM' },
        ],
        location: {
          address: null,
          coordinates: {
            latitude: '0',
            longitude: '-0.7031223177909851',
          },
        },
        schedule: [],
        sponsors: [],
        talks: [],
      },
    },
  };

  it('extracts the correct event status from the passed community object', () => {
    expect(mapStateToProps(fullState)).to.deep.equal({
      buttonText: 'Join Waitlist',
      linkType: 'TICKET',
      statusHeader: 'TICKETS NOW SOLD OUT',
      statusSubHeader: 'Join the waiting list on EventBrite',
      link: { url: 'google.com', title: 'EventBrite', type: 'TICKET' } }
    );
  });

  it('does not crash when state is missing', () => {
    [
      ['community'],
      ['community', 'featuredEvent'],
      ['community', 'featuredEvent', 'title'],
      ['community', 'featuredEvent', 'ticketsAvailable'],
      ['community', 'featuredEvent', 'waitingListOpen'],
      ['community', 'featuredEvent', 'startDateTime'],
      ['community', 'featuredEvent', 'startDateTime', 'iso'],
      ['community', 'featuredEvent', 'endDateTime'],
      ['community', 'featuredEvent', 'endDateTime', 'iso'],
      ['community', 'featuredEvent', 'ticketReleaseDate'],
      ['community', 'featuredEvent', 'ticketReleaseDate', 'iso'],
      ['community', 'featuredEvent', 'externalLinks'],
      ['community', 'featuredEvent', 'location'],
      ['community', 'featuredEvent', 'location', 'address'],
      ['community', 'featuredEvent', 'location', 'coordinates'],
      ['community', 'featuredEvent', 'schedule'],
      ['community', 'featuredEvent', 'sponsors'],
      ['community', 'featuredEvent', 'talks'],
    ].forEach(path => {
      const state = R.dissocPath(path, fullState);
      try {
        mapStateToProps(state);
      } catch (e) {
        expect(e).to.equal(null,
          `should not crash when ${path.join('.')} is missing`);
      }
    });
  });
});
