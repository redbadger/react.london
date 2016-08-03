import { connect } from 'react-redux';
import pathOr from 'ramda/src/pathOr';
import TicketStatus from '../../components/TicketStatus';
import { getTicketStatusOptions } from '../../utilities/ticket-status';

const emptyFeaturedEvent = {
  title: '',
  ticketsAvailable: false,
  waitingListOpen: false,
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
};

export const mapStateToProps = (state) => {
  const featuredEvent = pathOr(emptyFeaturedEvent, ['community', 'featuredEvent'], state);
  const props = getTicketStatusOptions(featuredEvent);

  return {
    ...props,
  };
};

export default connect(mapStateToProps)(TicketStatus);
