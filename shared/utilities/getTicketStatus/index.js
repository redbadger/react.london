import moment from 'moment';
import { isBefore, isAfter, formatDate } from '../dateUtils';

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
      statusSubHeader: 'Go to {Eventbrite} to get yours',
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
      statusSubHeader: 'Join the waiting list on {eventbrite}',
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
  if (isAfter(currentTime, endDateTime)) {
    return {
      buttonText: 'Watch',
      linkType: 'STREAM',
      statusHeader: 'This event has ended',
      statusSubHeader: 'Couldn’t get a ticket? We got your back.',
    };
  }
}

export function getTicketStatusOptions(options) {
  const parameters = { ...options, currentTime: moment() };
  const checks = [isTicketPreRelease, isTicketRelease, isWaitlist, isStreaming, isEnded];
  let result;

  checks.some((check) => {
    result = check(parameters);
    return result;
  });

  return Object.assign({}, result, {
    link: getActionLink(options.externalLinks, result.linkType),
  });
}
