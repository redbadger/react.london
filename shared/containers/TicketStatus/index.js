import { connect } from 'react-redux';
import pathOr from 'ramda/src/pathOr';
import TicketStatus from '../../components/TicketStatus';
import { getTicketStatusOptions } from '../../utilities/ticket-status';

const defaultEvents = [
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

export const mapStateToProps = (state) => {
  const events = pathOr(defaultEvents, ['community', 'events'], state);
  const featuredEvent = events.find(e => e.displayLevel === 'Featured') || {};
  const props = getTicketStatusOptions(featuredEvent);

  return {
    ...props,
  };
};

export default connect(mapStateToProps)(TicketStatus);
