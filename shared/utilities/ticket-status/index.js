import { formatDate } from '../date';

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
export function getTicketStatusOptions(event, statusTypes) {
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
