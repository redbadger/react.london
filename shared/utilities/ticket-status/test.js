import { getTicketStatusOptions, getTicketProvider, getTicketStatusSubtitle } from '.';
import tk from 'timekeeper';

describe('getTicketStatusOptions', () => {
  it('returns the correct status properties for PRE_RELEASE', () => {
    tk.freeze(new Date('2016-07-24T20:30:00+0000'));
    const event = {
      status: 'PRE_RELEASE',
      ticketReleaseDate: '2016-07-24T20:30:00+0000',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'Tickets will go live on Sunday, 24th July 2016, 21:30',
      subtitle: 'Sunday, 24th July 2016, 21:30',
      buttonText: 'FREE TICKETS AVAILABLE SOON',
      buttonLink: undefined,
    });
  });

  it('returns the correct status properties for PRE_RELEASE when requested twice', () => {
    tk.freeze(new Date('2016-07-24T20:30:00+0000'));
    const event = {
      status: 'PRE_RELEASE',
      ticketReleaseDate: '2016-07-24T20:30:00+0000',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'Tickets will go live on Sunday, 24th July 2016, 21:30',
      subtitle: 'Sunday, 24th July 2016, 21:30',
      buttonText: 'FREE TICKETS AVAILABLE SOON',
      buttonLink: undefined,
    });

    const resultTwo = getTicketStatusOptions(event);
    expect(resultTwo).to.deep.equal({
      title: 'Tickets will go live on Sunday, 24th July 2016, 21:30',
      subtitle: 'Sunday, 24th July 2016, 21:30',
      buttonText: 'FREE TICKETS AVAILABLE SOON',
      buttonLink: undefined,
    });
  });


  it('returns the correct status properties for TICKETS_LIVE', () => {
    const event = {
      status: 'TICKETS_LIVE',
      ticketLink: 'http://www.google.com',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'Get your tickets before they are sold out.',
      subtitle: 'To get yours, go to our ticket provider\'s website',
      buttonText: 'Free Tickets',
      buttonLink: 'http://www.google.com',
      linkType: 'ticketLink',
    });
  });
  it('returns the correct status properties for WAITLIST', () => {
    const event = {
      status: 'WAITLIST',
      ticketLink: 'http://www.google.com',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'Tickets are sold out.',
      subtitle: 'Join the waiting list on our ticket provider\'s website',
      buttonText: 'Join Waitlist',
      buttonLink: 'http://www.google.com',
      linkType: 'ticketLink',
    });
  });
  it('returns the correct status properties for LIVE_STREAM', () => {
    const event = {
      status: 'LIVE_STREAM',
      streamingLink: 'http://www.google.com',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'Couldn\'t make it? Watch the event live.',
      subtitle: 'Didn’t make it to the meetup? We got your back.',
      buttonText: 'Watch Live Stream',
      buttonLink: 'http://www.google.com',
      linkType: 'streamingLink',
    });
  });
  it('returns the correct status properties for EVENT_ENDED', () => {
    const event = {
      status: 'EVENT_ENDED',
      streamingLink: 'http://www.google.com',
    };
    const result = getTicketStatusOptions(event);
    expect(result).to.deep.equal({
      title: 'This event has ended. Watch the video here.',
      subtitle: 'Tickets now sold out.',
      buttonText: 'Watch Video',
      buttonLink: 'http://www.google.com',
      linkType: 'streamingLink',
    });
  });
  it('returns the correct status properties when no status is provided', () => {
    const result = getTicketStatusOptions({});
    expect(result).to.deep.equal({
      title: 'Tickets currently unavailable',
      subtitle: 'Please check back later for further details',
      buttonText: 'Tickets Unavailable',
    });
  });
});

describe('getTicketProvider', () => {
  it('returns empty string if linkn is null', () => {
    const link = null;
    expect(getTicketProvider(link)).to.equal('our ticket provider\'s website');
  });
  it('returns Skillsmatter if the link contains skillsmatter', () => {
    const link = 'http://skillsmatter.com';
    expect(getTicketProvider(link)).to.equal('Skillsmatter');
  });
  it('returns Ti.to if the link contains ti.to', () => {
    const link = 'http://ti.to';
    expect(getTicketProvider(link)).to.equal('Ti.to');
  });
  it('returns a default message if no recongized ticket provider is provided', () => {
    const link = '';
    expect(getTicketProvider(link)).to.equal('our ticket provider\'s website');
  });
});

describe('getTicketStatusSubtitle', () => {
  it('returns the correct subtitle if PRE_RELEASE is the event status', () => {
    tk.freeze(new Date('2016-07-24T20:30:00+0000'));
    const event = {
      status: 'PRE_RELEASE',
      ticketReleaseDate: '2016-07-24T20:30:00+0000',
    };
    const ticketStatusOptions = {
      subtitle: 'To get yours, go to ',
      buttonLink: 'ti.to',
    };
    expect(getTicketStatusSubtitle(event, ticketStatusOptions)).to.equal(
      'Sunday, 24th July 2016, 21:30'
    );
  });
  it('returns the correct subtitle if TICKETS_LIVE is the event status', () => {
    const event = {
      status: 'TICKETS_LIVE',
      ticketReleaseDate: '31 March 2016',
    };
    const ticketStatusOptions = {
      subtitle: 'To get yours, go to ',
      buttonLink: 'ti.to',
    };
    expect(getTicketStatusSubtitle(event, ticketStatusOptions)).to.equal(
      'To get yours, go to Ti.to'
    );
  });
  it('returns the correct subtitle if WAITLIST is the event status', () => {
    const event = {
      status: 'WAITLIST',
      ticketReleaseDate: '31 March 2016',
    };
    const ticketStatusOptions = {
      subtitle: 'Join the waiting list on ',
      buttonLink: 'ti.to',
    };
    expect(getTicketStatusSubtitle(event, ticketStatusOptions)).to.equal(
      'Join the waiting list on Ti.to'
    );
  });
  it('returns the correct subtitle if another status is provided', () => {
    const event = {
      status: 'EVENT_ENDED',
    };
    const ticketStatusOptions = {
      subtitle: 'Tickets now sold out',
    };
    expect(getTicketStatusSubtitle(event, ticketStatusOptions)).to.equal(
      'Tickets now sold out'
    );
  });
});
