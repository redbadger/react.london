/* eslint max-len: ["error", 2000] */
import { getTicketStatusOptions, getActionLink } from '.';
import tk from 'timekeeper';

describe('getTicketStatusOptions', () => {
  it('returns Free Ticket and empty linkType if the current time is before the ticket release time', () => {
    tk.freeze(new Date(100));
    const ticketReleaseDate = new Date(101);
    const result = getTicketStatusOptions({ ticketReleaseDate });

    expect(result).to.deep.equal({
      buttonText: 'Free Ticket',
      linkType: '',
      statusHeader: 'TICKETS WILL GO LIVE ON',
      statusSubHeader: 'Monday, 11 July 2016 at 12:00',
      link: undefined,
    });
  });

  it('returns Free ticket and Event linkType if the current Time is greater than the release date and there are tickets availiable', () => {
    tk.freeze(new Date(100));
    const ticketReleaseDate = new Date(99);
    const result = getTicketStatusOptions({ ticketReleaseDate, ticketsAvailable: true, waitingListOpen: false });

    expect(result).to.deep.equal({
      buttonText: 'Free Ticket',
      linkType: 'TICKET',
      statusHeader: 'TICKETS LIVE',
      statusSubHeader: 'Go to {Eventbrite} to get yours',
      link: undefined,
    });
  });

  it('returns Join Waitlist and Event linkType if the waiting list is open', () => {
    tk.freeze(new Date(100));
    const ticketReleaseDate = new Date(99);
    const result = getTicketStatusOptions({ ticketReleaseDate, ticketsAvailable: false, waitingListOpen: true });

    expect(result).to.deep.equal({
      buttonText: 'Join Waitlist',
      linkType: 'TICKET',
      statusHeader: 'TICKETS NOW SOLD OUT',
      statusSubHeader: 'Join the waiting list on {eventbrite}',
      link: undefined,
    });
  });

  it('returns Join Live Stream and Stream linkType if the current time is greater than the release date time and there are no tickets and no wait list', () => {
    tk.freeze(new Date(100));
    const result = getTicketStatusOptions({ ticketReleaseDate: new Date(99), endDateTime: new Date(101), ticketsAvailable: false, waitingListOpen: false });

    expect(result).to.deep.equal({
      buttonText: 'Join Live Stream',
      linkType: 'STREAM',
      statusHeader: 'TICKETS NOW SOLD OUT',
      statusSubHeader: 'Couldn’t get a ticket? We got your back.',
      link: undefined,
    });
  });

  it('returns Watch and Stream linkType if the event is completed', () => {
    tk.freeze(new Date(100));
// <<<<<<< Updated upstream
//     const result = getTicketStatusOptions({ endDateTime: new Date(99), ticketsAvailable: false, waitingListOpen: false });
// =======
    const result = getTicketStatusOptions({ ticketReleaseDate: new Date(98), endDateTime: new Date(99), ticketsAvailable: false, waitingListOpen: false });
// >>>>>>> Stashed changes

    expect(result).to.deep.equal({
      buttonText: 'Watch',
      linkType: 'STREAM',
      statusHeader: 'This event has ended',
      statusSubHeader: 'Couldn’t get a ticket? We got your back.',
      link: undefined,
    });
  });

  describe('getActionLink', () => {
    let externalLinks;

    beforeEach(() => {
      externalLinks = [
        {
          title: 'Baz',
          url: 'baz.com',
          type: null, // here we test that a null type is handled
        },
        {
          title: 'Foo',
          url: 'foo.com',
          type: 'TICKET',
        },
        {
          title: 'Boz',
          url: 'boz.com',
          type: 'TICKET',
        },
        {
          title: 'Bar',
          url: 'bar.com',
          type: 'STREAM',
        },
      ];
    });

    it('returns the first found link URL when multiple exist', () => {
      expect(getActionLink(externalLinks, 'TICKET'))
        .to.deep.equal({
          title: 'Foo',
          url: 'foo.com',
          type: 'TICKET',
        });
    });

    it('returns undefined when nothing is found', () => {
      expect(getActionLink(externalLinks, 'FOO'))
        .to.equal(undefined);
    });

    it('handles an empty list of externalLinks being passed in', () => {
      expect(getActionLink([], 'TICKET'))
        .to.equal(undefined);
    });

    it('handles a falsy list of externalLinks being passed in', () => {
      expect(getActionLink(null, 'TICKET'))
        .to.equal(undefined);
    });
  });
});
