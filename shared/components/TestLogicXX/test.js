/* eslint max-len: ["error", 2000] */
import { getTicketStatusOptions, getActionLink } from '.';
import tk from 'timekeeper';

describe('getTicketStatusOptions', () => {
  it('returns Free Ticket and empty linkType if the current time is before the ticket release time', () => {
    tk.freeze(new Date(100));
    const ticketsReleaseDateTime = new Date(101);
    const result = getTicketStatusOptions({ ticketsReleaseDateTime });

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
    const ticketsReleaseDateTime = new Date(99);
    const result = getTicketStatusOptions({ ticketsReleaseDateTime, ticketsAvailiable: true, waitingListOpen: false });

    expect(result).to.deep.equal({
      buttonText: 'Free Ticket',
      linkType: 'EVENT',
      statusHeader: 'TICKETS LIVE',
      statusSubHeader: 'Go to {Eventbrite} to get yours',
      link: undefined,
    });
  });

  it('returns Join Waitlist and Event linkType if the waiting list is open', () => {
    tk.freeze(new Date(100));
    const ticketsReleaseDateTime = new Date(99);
    const result = getTicketStatusOptions({ ticketsReleaseDateTime, ticketsAvailiable: false, waitingListOpen: true });

    expect(result).to.deep.equal({
      buttonText: 'Join Waitlist',
      linkType: 'EVENT',
      statusHeader: 'TICKETS NOW SOLD OUT',
      statusSubHeader: 'Join the waiting list on {eventbrite}',
      link: undefined,
    });
  });

  it('returns Join Live Stream and Stream linkType if the current time is greater than the release date time and there are no tickets and no wait list', () => {
    tk.freeze(new Date(100));
    const result = getTicketStatusOptions({ ticketsReleaseDateTime: new Date(99), ticketsAvailiable: false, waitingListOpen: false });

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
    const result = getTicketStatusOptions({ endDateTime: new Date(99), ticketsAvailiable: false, waitingListOpen: false });

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
          type: null // here we test that a null type is handled
        },
        {
          title: 'Foo',
          url: 'foo.com',
          type: 'EVENT',
        },
        {
          title: 'Boz',
          url: 'boz.com',
          type: 'EVENT',
        },
        {
          title: 'Bar',
          url: 'bar.com',
          type: 'STREAM',
        },
      ];
    });

    it('returns the first found link URL when multiple exist', () => {
      expect(getActionLink(externalLinks, 'EVENT'))
        .to.deep.equal({
          title: 'Foo',
          url: 'foo.com',
          type: 'EVENT',
        });
    });

    it('returns undefined when nothing is found', () => {
      expect(getActionLink(externalLinks, 'FOO'))
        .to.equal(undefined);
    });

    it('handles an empty list of externalLinks being passed in', () => {
      expect(getActionLink([], 'EVENT'))
        .to.equal(undefined);
    });

    it('handles a falsy list of externalLinks being passed in', () => {
      expect(getActionLink(null, 'EVENT'))
        .to.equal(undefined);
    });
  });
});
