import { formatDate } from '../date';

const statusTypes = {
  PRE_RELEASE: {
    title: 'Tickets will go live on',
    subtitle: '',
    buttonText: 'FREE TICKET AVAILABLE SOON',
  },
  TICKETS_LIVE: {
    title: 'Tickets live',
    subtitle: 'To get yours, go to ',
    buttonText: 'Free Ticket',
    linkType: 'ticketLink',
  },
  WAITLIST: {
    title: 'Tickets now sold out',
    subtitle: 'Join the waiting list on ',
    buttonText: 'Join Waitlist',
    linkType: 'ticketLink',
  },
  LIVE_STREAM: {
    title: 'Tickets now sold out',
    subtitle: 'Didn’t make it to the meetup? We got your back.',
    buttonText: 'Join Live Stream',
    linkType: 'streamingLink',
  },
  EVENT_ENDED: {
    title: 'This event has ended',
    subtitle: 'Tickets now sold out',
    buttonText: 'Watch Video',
    linkType: 'streamingLink',
  },
};

export function getTicketProvider(link) {
  if (link.includes('skillsmatter')) {
    return 'Skillsmatter';
  }
  if (link.includes('ti.to')) {
    return 'Ti.to';
  }
  return 'our ticket provider\'s website';
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
  const ticketStatusOptions = statusTypes[event.status];
  if (ticketStatusOptions) {
    ticketStatusOptions.buttonLink = event[ticketStatusOptions.linkType];
    ticketStatusOptions.subtitle = getTicketStatusSubtitle(event, ticketStatusOptions);
    return ticketStatusOptions;
  }
  return {
    title: 'Tickets currently unavailable',
    subtitle: 'Please check back later for further details',
    buttonText: 'Tickets Unavailable',
  };
}
