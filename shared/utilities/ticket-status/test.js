import { getTicketStatusOptions, getActionLink } from '.';
import tk from 'timekeeper';

describe('getTicketStatusOptions', () => {
  it(
    'returns Free Ticket and empty linkType if the current time is before the ticket release time',
    () => {
      tk.freeze(new Date(100));
      const ticketReleaseDate = new Date(101);
      const result = getTicketStatusOptions({ ticketReleaseDate });

      expect(result).to.deep.equal({
        buttonText: 'FREE TICKET AVAILABLE SOON',
        linkType: '',
        statusHeader: 'TICKETS WILL GO LIVE ON',
        statusSubHeader: 'Thursday, 1st January 1970, 01:00',
        link: undefined,
      });
    }
  );

  it(
    'returns freeTicket + eventLinkType when currentTime > the releaseDate + ticketsAvailiable',
    () => {
      tk.freeze(new Date(100));
      const ticketReleaseDate = new Date(99);
      const result = getTicketStatusOptions({
        ticketReleaseDate,
        ticketsAvailable: true,
        waitingListOpen: false,
        externalLinks: [
          {
            title: 'Baz',
            url: 'baz.com',
            type: 'TICKET',
          },
        ],
      });

      expect(result).to.deep.equal({
        buttonText: 'Free Ticket',
        linkType: 'TICKET',
        statusHeader: 'TICKETS LIVE',
        statusSubHeader: 'To get yours, go to Baz',
        link: {
          title: 'Baz',
          url: 'baz.com',
          type: 'TICKET',
        },
      });
    }
  );

  it('returns Join Waitlist and Event linkType if the waiting list is open', () => {
    tk.freeze(new Date(100));
    const ticketReleaseDate = new Date(99);
    const result = getTicketStatusOptions({
      ticketReleaseDate,
      ticketsAvailable: false,
      waitingListOpen: true,
      externalLinks: [
        {
          title: 'Baz',
          url: 'baz.com',
          type: 'TICKET',
        },
      ],
    });

    expect(result).to.deep.equal({
      buttonText: 'Join Waitlist',
      linkType: 'TICKET',
      statusHeader: 'TICKETS NOW SOLD OUT',
      statusSubHeader: 'Join the waiting list on Baz',
      link: {
        title: 'Baz',
        url: 'baz.com',
        type: 'TICKET',
      },
    });
  });

  it(
    'returns Join Live Stream and Stream linkType if the current time is greater than the' +
    'release date time and there are no tickets and no wait list',
    () => {
      tk.freeze(new Date(100));
      const result = getTicketStatusOptions({
        ticketReleaseDate: new Date(99),
        endDateTime: new Date(101),
        ticketsAvailable: false,
        waitingListOpen: false,
        externalLinks: [
          {
            title: 'Baz',
            url: 'baz.com',
            type: 'TICKET',
          },
        ],
      });

      expect(result).to.deep.equal({
        buttonText: 'Join Live Stream',
        linkType: 'STREAM',
        statusHeader: 'TICKETS NOW SOLD OUT',
        statusSubHeader: 'Couldn’t get a ticket? We got your back.',
        link: undefined,
      });
    }
  );

  it('returns Watch and Stream linkType if the event is completed', () => {
    tk.freeze(new Date(100));
    const result = getTicketStatusOptions({
      ticketReleaseDate: new Date(98),
      endDateTime: new Date(99),
      ticketsAvailable: false,
      waitingListOpen: false,
    });

    expect(result).to.deep.equal({
      buttonText: 'Watch',
      linkType: 'STREAM',
      statusHeader: 'This event has ended',
      statusSubHeader: 'Couldn’t get a ticket? We got your back.',
      link: undefined,
    });
  });

  describe('getActionLink', () => {
    const externalLinks = [
      {
        title: 'Baz',
        url: 'baz.com',
        type: null,
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
