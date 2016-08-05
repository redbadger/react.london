import moment from 'moment';
import { isBefore, isAfter, formatDate } from '../date';

export function getActionLink(externalLinks, type) {
  if (!externalLinks) return undefined;

  return externalLinks.find(link => link.type === type);
}

export function isTicketPreRelease({ currentTime, ticketReleaseDate }) {
  if (isBefore(currentTime, ticketReleaseDate)) {
    return {
      buttonText: 'Free Ticket',
      linkType: '',
      statusHeader: 'TICKETS WILL GO LIVE ON',
      statusSubHeader: formatDate(ticketReleaseDate, 'dddd, Do MMMM YYYY, HH:mm'),
    };
  }
}

export function isTicketRelease({ currentTime, ticketReleaseDate, ticketsAvailable }) {
  if (isAfter(currentTime, ticketReleaseDate) && ticketsAvailable) {
    return {
      buttonText: 'Free Ticket',
      linkType: 'TICKET',
      statusHeader: 'TICKETS LIVE',
      statusSubHeader: 'To get yours, go to',
    };
  }
}

export function isWaitlist({
  currentTime,
  ticketsAvailable,
  waitingListOpen,
  ticketReleaseDate,
}) {
  if (waitingListOpen && !ticketsAvailable && (isAfter(currentTime, ticketReleaseDate))) {
    return {
      buttonText: 'Join Waitlist',
      linkType: 'TICKET',
      statusHeader: 'TICKETS NOW SOLD OUT',
      statusSubHeader: 'Join the waiting list on',
    };
  }
}

export function isStreaming({
  currentTime,
  ticketReleaseDate,
  ticketsAvailable,
  waitingListOpen,
  endDateTime,
}) {
  if (
    isAfter(currentTime, ticketReleaseDate)
    && !waitingListOpen
    && !ticketsAvailable
    && isBefore(currentTime, endDateTime)
  ) {
    return {
      buttonText: 'Join Live Stream',
      linkType: 'STREAM',
      statusHeader: 'TICKETS NOW SOLD OUT',
      statusSubHeader: 'Couldn’t get a ticket? We got your back.',
    };
  }
}

export function isEnded({ currentTime, endDateTime }) {
  if (currentTime && endDateTime && isAfter(currentTime, endDateTime)) {
    return {
      buttonText: 'Watch',
      linkType: 'STREAM',
      statusHeader: 'This event has ended',
      statusSubHeader: 'Couldn’t get a ticket? We got your back.',
    };
  }
}

function statusSubHeader(result, link) {
  const suffix = (result.linkType === 'TICKET' && link !== undefined)
    ? ' ' + link.title
    : '';
  return `${result.statusSubHeader}${suffix}`;
}

export function getTicketStatusOptions(options) {
  const parameters = { ...options, currentTime: moment() };
  const checks = [
    isTicketPreRelease,
    isTicketRelease,
    isWaitlist,
    isStreaming,
    isEnded,
  ];
  const statusFunc = checks.find(check => check(parameters));
  const result = statusFunc(parameters);
  const link = getActionLink(options.externalLinks, result.linkType);
  return {
    ...result,
    link,
    statusSubHeader: statusSubHeader(result, link),
  };
}
