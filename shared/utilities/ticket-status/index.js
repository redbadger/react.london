import moment from 'moment';
import { isBefore, isAfter, formatDate } from '../date';

const defaultOptions = [
  {
    title: '',
    ticketsAvailable: false,
    waitingListOpen: false,
    displayLevel: 'Featured',
    startDateTime: {
      iso: '',
    },
    endDateTime: {
      iso: '',
    },
    ticketReleaseDate: {
      iso: '',
    },
    externalLinks: [
      { url: '', title: '', type: 'OTHER' },
    ],
    location: {
      address: null,
      coordinates: {
        latitude: '',
        longitude: '',
      },
    },
    schedule: [],
    sponsors: [],
    talks: [],
  },
];

export function getActionLink(externalLinks, type) {
  if (!externalLinks) return undefined;

  return externalLinks.find(link => link.type === type);
}

function defaultValues() {
  return {
    buttonText: 'Ticket',
    linkType: '',
    statusHeader: 'Tickets not currently available',
    statusSubHeader: 'Stay tuned for more info',
  };
}

export function isTicketPreRelease({ currentTime, ticketReleaseDate }) {
  if (isBefore(currentTime, ticketReleaseDate)) {
    return {
      buttonText: 'FREE TICKET AVAILABLE SOON',
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
      statusSubHeader: 'Didn’t make it to the meetup? We got your back.',
    };
  }
}

export function isEnded({ currentTime, endDateTime }) {
  if (currentTime && endDateTime && isAfter(currentTime, endDateTime)) {
    return {
      buttonText: 'Watch',
      linkType: 'STREAM',
      statusHeader: 'This event has ended',
      statusSubHeader: 'Didn’t make it to the meetup? We got your back.',
    };
  }
}

function statusSubHeader(result, link) {
  const suffix = (result.linkType === 'TICKET' && link !== undefined)
    ? ' ' + link.title
    : '';
  return `${result.statusSubHeader}${suffix}`;
}

export function getTicketStatusOptions(opts) {
  const options = opts || defaultOptions;
  const parameters = { ...options, currentTime: moment() };
  const checks = [
    isTicketPreRelease,
    isTicketRelease,
    isWaitlist,
    isStreaming,
    isEnded,
    defaultValues,
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
