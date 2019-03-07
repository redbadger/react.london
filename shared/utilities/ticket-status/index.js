import { formatDate } from '../date';

const statusTypes = {
  PRE_RELEASE: {
    title: 'Tickets will go live on ',
    subtitle: '',
    buttonText: 'FREE TICKETS AVAILABLE SOON',
  },
  TICKETS_LIVE: {
    title: 'Get your tickets before they are sold out.',
    subtitle: 'To get yours, go to ',
    buttonText: 'Free Tickets',
    linkType: 'ticketLink',
  },
  WAITLIST: {
    title: 'Tickets are sold out.',
    subtitle: 'Join the waiting list on ',
    buttonText: 'Join Waitlist',
    linkType: 'ticketLink',
  },
  REGISTRATION_CLOSED: {
    title: 'Registration is now closed.',
    subtitle: '',
    buttonText: 'Registration closed',
    linkType: 'registrationClosedLink',
  },
  LIVE_STREAM: {
    title: 'Couldn\'t make it? Watch the event live.',
    subtitle: 'Didn’t make it to the meetup? We got your back.',
    buttonText: 'Watch Live Stream',
    linkType: 'streamingLink',
  },
  EVENT_ENDED: {
    title: 'This event has ended. Watch the video here.',
    subtitle: 'Tickets now sold out.',
    buttonText: 'Watch Video',
    linkType: 'streamingLink',
  },
};

export function getTicketProvider(link) {
  if (!link) {
    return 'our ticket provider\'s website';
  }
  if (link.includes('skillsmatter')) {
    return 'Skillsmatter';
  }
  if (link.includes('ti.to')) {
    return 'Ti.to';
  }
  return 'our ticket provider\'s website';
}

export function getTicketStatusTitle(event, ticketStatusOptions) {
  if (event.status === 'PRE_RELEASE') {
    return ticketStatusOptions.title + formatDate(event.ticketReleaseDate,
      'dddd, Do MMMM YYYY, HH:mm');
  }
  return ticketStatusOptions.title;
}

export function getTicketStatusSubtitle(event, ticketStatusOptions) {
  if (event.status === 'PRE_RELEASE') {
    return formatDate(event.ticketReleaseDate, 'dddd, Do MMMM YYYY, HH:mm');
  }
  if (event.status === 'TICKETS_LIVE' || event.status === 'WAITLIST') {
    return ticketStatusOptions.subtitle + getTicketProvider(ticketStatusOptions.buttonLink);
  }
  return ticketStatusOptions.subtitle;
}

export function getTicketStatusOptions(event) {
  if (statusTypes[event.status]) {
    const ticketStatusOptions = { ...statusTypes[event.status] };
    ticketStatusOptions.buttonLink = event[ticketStatusOptions.linkType];
    ticketStatusOptions.title = getTicketStatusTitle(event, ticketStatusOptions);
    ticketStatusOptions.subtitle = getTicketStatusSubtitle(event, ticketStatusOptions);
    return ticketStatusOptions;
  }
  return {
    title: 'Tickets currently unavailable',
    subtitle: 'Please check back later for further details',
    buttonText: 'Tickets Unavailable',
  };
}
