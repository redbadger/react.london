import moment from 'moment';

export function isWaitlist({
  currentTime,
  ticketsAvailiable,
  waitingListOpen,
  ticketsReleaseDateTime,
}) {
  if (waitingListOpen && !ticketsAvailiable && (currentTime.isAfter(ticketsReleaseDateTime))) {
    return {
      buttonText: 'Join Waitlist',
      linkType: 'EVENT',
    };
  }
}

export function isTicketPreRelease({ currentTime, ticketsReleaseDateTime }) {
  if (currentTime.isBefore(ticketsReleaseDateTime)) {
    return {
      buttonText: 'Free Ticket',
      linkType: '',
    };
  }
}

export function isTicketRelease({ currentTime, ticketsReleaseDateTime, ticketsAvailiable }) {
  if (currentTime.isAfter(ticketsReleaseDateTime) && ticketsAvailiable) {
    return {
      buttonText: 'Free Ticket',
      linkType: 'EVENT',
    };
  }
}

export function isStreaming({ currentTime, ticketsReleaseDateTime, ticketsAvailiable, waitingListOpen }) {
  if (currentTime.isAfter(ticketsReleaseDateTime) && !waitingListOpen && !ticketsAvailiable) {
    return {
      buttonText: 'Join Live Stream',
      linkType: 'STREAM',
    };
  }
}

export function isEnded({ currentTime, endDateTime }) {
  if (currentTime.isAfter(endDateTime)) {
    return {
      buttonText: 'Watch',
      linkType: 'STREAM',
    };
  }
}

export function getButtonText(options) {
  const parameters = { ...options, currentTime: moment() };
  const checks = [isTicketPreRelease, isTicketRelease, isWaitlist, isStreaming, isEnded];
  let result;

  checks.some((check) => {
    result = check(parameters);
    return result;
  });
  return result;
}
