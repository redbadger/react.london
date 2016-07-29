import moment from 'moment';

export function getButtonText(ticketsReleaseDateTime, endDateTime, ticketsAvailiable, waitingListOpen) {
  const currentTime = moment();
  if (waitingListOpen) {
    return {
      buttonText: 'Join Waitlist',
      linkType: 'EVENT',
    };
  }
  if (currentTime.isBefore(ticketsReleaseDateTime)) {
    return {
      buttonText: 'Free Ticket',
      linkType: '',
    };
  }
  if (currentTime.isAfter(ticketsReleaseDateTime) && ticketsAvailiable) {
    return {
      buttonText: 'Free Ticket',
      linkType: 'EVENT',
    };
  }
  if (currentTime.isAfter(endDateTime)) {
    return {
      buttonText: 'Watch',
      linkType: 'STREAM',
    };
  }
  if (currentTime.isAfter(ticketsReleaseDateTime)) {
    return {
      buttonText: 'Join Live Stream',
      linkType: 'STREAM',
    };
  }
}
